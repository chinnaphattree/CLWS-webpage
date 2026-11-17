const SCHEDULE = [
    {
        date: "2026-06-15",
        time: "19:00",
        teamA: "CLWS Team A",
        teamB: "team B",
        type: "Scrim",
        live: false,
        result: "" // 1. ยังไม่แข่ง (แสดงสถานะ UPCOMING อัตโนมัติ)
    },
    {
        date: "2026-06-18",
        time: "20:30",
        teamA: "CLWS Team B",
        teamB: "team A",
        type: "Tournament",
        live: true, // 2. กำลังแข่งอยู่ตอนนี้ (แสดงสถานะ LIVE อัตโนมัติ)
        result: ""
    },
    {
        date: "2026-06-10",
        time: "18:00",
        teamA: "CLWS Team A",
        teamB: "team B",
        type: "scrim",
        live: false,
        result: "WIN (2-1)" // 3. แข่งจบแล้ว (ใส่ผลการแข่งขัน ระบบจะเปลี่ยนเป็น COMPLETED ทันที)
    }
];