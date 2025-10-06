npx create-strapi-app@lates project_name

npm run strapi

npm run strapi admin:create
npm run strapi admin:create-user

npm run strapi develop

npm run strapi



// http://localhost:1337/api/products
http://localhost:1337/api/products?filters


Strapi 5 (və 4.15+) versiyasından etibarən, data layer tam dəyişib.

// LƏĞV EDİLDİ İD YALNIZ DATA ÜÇÜN KEÇƏRLİDİR
// http://localhost:1337/api/products/1

// KEÇƏRLİDİR
http://localhost:1337/api/products/bs2ginzozc06l72pvxfcrt24

// VƏ YAXUD FİLTER SİSTEMİ İLƏ
http://localhost:1337/api/products?filters[documentId][$eq]=bs2ginzozc06l72pvxfcrt24
http://localhost:1337/api/products?filters[id][$eq]=2


Operator	İzah	                    Nümunə
$eq	        Dəqiq bərabərlik	        filters[code][$eq]=12345
$ne	        Bərabər deyil	            filters[name][$ne]=TEST 1
$in	        Siyahıdakı hər hansı biri	filters[code][$in]=12345,23456
$contains	Mətn daxilində axtarış	    filters[name][$contains]=TEST
$null	    Boş dəyərlər	            filters[code][$null]=true
$notNull	Boş olmayan	                filters[code][$notNull]=true


// YAZ
http://localhost:1337/api/obyekts?populate=obyekt_novu
http://localhost:1337/api/obyekts?populate=*

Bütün əlaqələri populate etmək:
GET /api/products?populate=*

Yalnız bir əlaqəni populate etmək:
GET /api/products?populate=brand

Bir neçə əlaqəni populate etmək:
GET /api/products?populate=brand,category

Media faylları ilə birlikdə:
GET /api/products?populate=images

Filter + Populate birlikdə
GET /api/products?filters[code][$eq]=12345&populate=brand,category,images


Dərin əlaqələr (nested relations)
Əgər məhsulun brand və brand içində də country əlaqəsi varsa, onu belə gətirə bilərsən:
GET /api/products?populate[brand][populate]=country

Və ya bir az daha çox dərinlik:
GET /api/products?populate[brand][populate][country][populate]=continent