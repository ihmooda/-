function calculateScore() {
    // الحصول على القيم المدخلة من المستخدم
    let math = parseFloat(document.getElementById("math").value) || 0;
    let statistics = parseFloat(document.getElementById("statistics").value) || 0;
    let science = parseFloat(document.getElementById("science").value) || 0;
    let arabic = parseFloat(document.getElementById("arabic").value) || 0;
    let english = parseFloat(document.getElementById("english").value) || 0;

    // عدد الوحدات الجديدة لكل مادة
    let subjectsUnits = {
        "الرياضيات": 4,
        "الإحصاء": 3,
        "الطبيعة": 3,
        "اللغة العربية": 1,
        "اللغة الإنجليزية": 3
    };

    // حساب المجموع الكلي للوحدات
    let totalUnits = Object.values(subjectsUnits).reduce((a, b) => a + b, 0);

    // حساب النتيجة النهائية
    let totalWeightedScore = (
        (math / 100) * (subjectsUnits["الرياضيات"] * 100) +
        (statistics / 100) * (subjectsUnits["الإحصاء"] * 100) +
        (science / 100) * (subjectsUnits["الطبيعة"] * 100) +
        (arabic / 100) * (subjectsUnits["اللغة العربية"] * 100) +
        (english / 100) * (subjectsUnits["اللغة الإنجليزية"] * 100)
    );

    let finalPercentage = (totalWeightedScore / (totalUnits * 100)) * 100;
    finalPercentage = finalPercentage.toFixed(2); // تحديد منزلتين عشريتين

    // تغيير اللون بناءً على النتيجة
    let resultElement = document.getElementById("result");
    resultElement.innerText = `نسبتك النهائية: ${finalPercentage}%`;
    resultElement.style.color = finalPercentage >= 50 ? "green" : "red";
}

function resetFields() {
    document.getElementById("math").value = "";
    document.getElementById("statistics").value = "";
    document.getElementById("science").value = "";
    document.getElementById("arabic").value = "";
    document.getElementById("english").value = "";
    document.getElementById("result").innerText = "نسبتك النهائية: --%";
    document.getElementById("result").style.color = "#333";
}
