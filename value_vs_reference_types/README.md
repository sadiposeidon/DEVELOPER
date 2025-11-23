***
🌱 1. Proqramlamada Dəyər (Value) və İstinad (Reference) nə deməkdir?

Proqram işləyəndə yaddaş iki əsas hissəyə bölünür:

Yaddaş növü		Nə saxlanılır?
Stack			Kiçik və sabit ölçülü dəyişənlər. (Value type-ların öz məlumatı)
Heap			Böyük obyektlər və referans tipli obyektlər

Value type 		— dəyişən birbaşa öz dəyərini saxlayır.
Reference type 	— dəyişən obyektin özünü saxlamır, onun Heap-dəki ünvanını saxlayır.

-------------------------------------------------
🟦 2. Value Type-lar (Dəyər tipləri)

Bunlara daxildir:
	int, double, float, bool, char
	struct
	enum
	DateTime

Value type necə işləyir?

Dəyər birbaşa stack-də saxlanılır.

🎯 Əsas xüsusiyyət:
	Kopyalandıqda dəyərin surəti çıxarılır.
	İki dəyişən bir-birinə təsir etmir.

📌 Misal:
int a = 10;
int b = a;

b = 20;

Console.WriteLine(a); // 10
Console.WriteLine(b); // 20

➡️ b dəyişdi, a dəyişmədi. Çünki bunlar ayrı dəyərlərdir.
***
