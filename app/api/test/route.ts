import {NextResponse} from "next/server";


export async function POST(req: Request) {

    if (req.method !== "POST") {
        return new NextResponse("Method Not Allowedenes", {status: 405})
    }

    const x_customer_id = "test_customer_id"
    const x_project_id = "test_project_id"
    const x_host = "test_host"

    try {
        const request = await req.json();
        const {customerID, projectID, host, collection_name} = request;


        if (!customerID || !projectID || !host || !collection_name) {
            return new NextResponse("Missing required fields", {status: 400});
        }

        if (host !== x_host || customerID !== x_customer_id || projectID !== x_project_id) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const scriptContent = `
const toast = document.createElement('div');
toast.style.position = 'fixed';
toast.style.bottom = '10px';
toast.style.left = '-100%';
toast.style.transition = 'left 0.5s ease-in-out';
toast.style.padding = '10px';
toast.style.backgroundColor = 'green';
toast.style.color = 'white';
toast.style.borderRadius = '5px';
toast.style.zIndex = 9999;
toast.style.display = 'none';
toast.style.width = '200px';
toast.style.height = '50px';
toast.style.alignItems = 'center';
toast.style.justifyContent = 'center';
document.body.appendChild(toast);

function showNotification(message) {
    toast.innerText = message;
    toast.style.left = '10px';
    toast.style.display = 'flex';

    setTimeout(() => {
        toast.style.left = '-100%';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 500);
    }, 3000);
}

const fetchData = async () => {
    try {
        const evtSource = new EventSource('http://127.0.0.1:8090/api/realtime');

        evtSource.addEventListener('PB_CONNECT', async function (e) {
            const clientId = e.lastEventId;

            try {
                await setSubscriptions(clientId,["${collection_name}/*?options={\\"query\\":{\\"filter\\":\\"projectID = '${projectID}'\\"}}"]);
            } catch (error) {
                console.error("[PB_CONNECT] Hatası", error);
            }
        });

        evtSource.addEventListener("${collection_name}/*?options={\\"query\\":{\\"filter\\":\\"projectID = '${projectID}'\\"}}", function (e) {
            const eventData = JSON.parse(e.data);
            console.log("Yeni bir todo geldi", eventData);
            showNotification(eventData.record.todo_name);
        });

        evtSource.onopen = function (e) {
            console.log("onopen fonksiyon çalıştı:", e);
        }

        evtSource.onerror = function (e) {
            console.error("onerror fonksiyon çalıştı:", e);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const setSubscriptions = async (clientId, subscriptions) => {
    try {
        return await fetch('http://127.0.0.1:8090/api/realtime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clientId, subscriptions })
        });

    } catch (error) {
        throw new Error("Abonelikler ayarlanırken hata oluştu:", error);
    }
}

fetchData();
    `


        return new NextResponse(scriptContent, {
            headers: {
                "Content-Type": "text/javascript"
            }
        });


    } catch (error) {
        console.log("[TEST_BACKEND_ERROR]", error)
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
