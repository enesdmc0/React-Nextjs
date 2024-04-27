// crm_events koleksiyonu için onRecordAfterCreateRequest hook'u
onRecordAfterCreateRequest((e) => {
    // Olay sadece 'crm_events' koleksiyonu için tetiklenir
    if (e.record.collection === "crm_events") {
        console.log("Yeni bir CRM Event oluşturuldu:", e.record);

        // 'status' değerine göre koşullu işlem
        if (e.record.data.status === "desired_status") {
            // Burada, 'status' değeri istenilen değere eşitse yapılacak işlemler
            // Örneğin, bir API çağrısı yapmak veya başka bir servisi tetiklemek
            triggerSomeAction(e.record);
        }
    }
}, "crm_events"); // Bu hook sadece 'crm_events' koleksiyonu için tetiklenecek şekilde yapılandırıldı
