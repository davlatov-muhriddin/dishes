import { useState } from "react";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import DishesList from "./components/dishes-list/DishesList";

function App() {
  const [data, setData] = useState([]);
  const dishes = [
    {
      id: 1,
      image:
        "https://lobsterhouse.ru/wp-content/uploads/5/a/8/5a89e8e7535caf17ee72b50854cd2b85.jpeg",
      title: "Xonim",
      description:
        "Hozirgi turk tilida Hanım shaklida keng qoʻllanilib kelinadi. Hanımefendi unvoni Xonim (tr. Hanım) va afandi soʻzlarining qoʻshilishidan hosil boʻlgan. Bugungi kunda bu atama har qanday ijtimoiy darajadagi ayollarga nisbatan hurmat bilan murojaat qilish usuli sifatida ishlatib kelinadi. „Madam“ — „maʼam“ soʻzining sharqiy ekvivalenti yoki soʻzlashuv tilidagi koʻrinishi „xonim“dir.",
      price: 30,
      category: "Xamir Ovqat",
    },
    {
      id: 2,
      image: "https://hutor66.ru/images/5926f154f2a8f.jpg",
      title: "Sho'rva",
      description:
        "Qovurma shoʻrva — qoʻy yogʻi kubik qilib toʻgʻraladi va qozonga solib chalaroq eritiladi. Goʻsht boʻlaklarga boʻlinib, yogʻ bilan birga qizarguncha, soʻngra toʻgʻralgan piyoz va pomidor qoʻshib yana 7—10 daqiqa qovuriladi, kartoshka solib bir-ikki aylantiriladi va suv quyiladi. Suv qaynab chiqquncha qozonga tuz, bir dona qizil qalampir, toʻgʻralgan ukrop va kashnich solinadi. Shoʻrva qaynab chiqqach, olovi pasaytirilib, yana 1 soatcha mildiratib qaynatiladi.",
      price: 15,
      category: "Suyuq Ovqat",
    },
    {
      id: 3,
      image:
        "https://img.povar.ru/main-micro/71/a7/1b/ab/salat_quotolivequot_klassicheskii_s_kolbasoi-286788.JPG",
      title: "Oliviya",
      description:
        "Olivye (ruscha: Оливье) — salat turlaridan biri. Asosan Rossiya va sobiq SSSR davlatlarida ommabop bayramona salat hisoblanadi. Baʼzida ushbu salat baʼzi davlatlarda Rus salati yoki Poytaxt salati deb nomlanadi.",
      price: 20,
      category: "Salat",
    },
    {
      id: 4,
      image:
        "https://www.webtekno.com/images/editor/default/0003/64/c01cd04454e106efb569a692e4f8a9e9953e180d.jpeg",
      title: "Cola",
      description:
        "chimlik 1889-yil 8-mayda (Jorjiya shtati, AQSh) Atlantada oʻylab topilgan. Uning muallifi farmatsevt John Stith Pemberton (afsonalarga qaraganda ichimlikning retseptini bir fermer ixtiro qilgan va Pembertonga $250 ga sotadi, bu haqida Pemberton oʻzining intervyularining birida aytgan emish). Ichimlikni nomini Pembertonning hisobchisi Frank Robinson kalligrafiya bilan chiroyli qilib „Coca-Cola“ soʻzini yozadi. Bu soʻz hozirgi kungacha ichimlikning logotipi boʻlib qoʻllanilib kelyapti. „Coca-Cola“ning tarkibida koka oʻsimlik (kokain) bor.",
      price: 1,
      category: "Ichimlik",
    },
    {
      id: 5,
      image:
        "https://avatars.mds.yandex.net/i?id=c17af6c54f66fc0fdcbc913a6edce727ce4c3872-10414170-images-thumbs&n=13",
      title: "Manti",
      description:
        "Manti (xit. an’anaviy 饅頭, soddalashtrilgan 馒头, pinyin: mántóu, qozoqcha: мәнті, mänti, مأنتى, turkcha: mantı, oʻzbekcha: manti, monti, armancha: մանթի), shuningdek, manty (qirgʻizcha: манты; ruscha: манты; tatarcha: манты), mantu (forscha, arabcha: منتو; tojikcha: манту) yoki manta (uygʻurcha: مانتا, manta, monta, манта, монта) — manti qasqonda bugʻ yordamida tayyorlanadigan yupqa yoyilgan xamir ichida mayda kesilgan goʻshtdan tarkib topgan taom. Ushbu taom Markaziy Osiyo, Turkiya, Mongoliya, Koreya, Tatariston, Qirim xalqlarining anʼanaviy goʻshtli taomi. Manti soʻzi taxminlarga koʻra, xitoycha „mantou“ soʻzidan kelib chiqqan.[1]",
      price: "3",
      category: "Xamir Ovqat",
    },
    {
      id: 6,
      image:
        "https://avatars.mds.yandex.net/i?id=2df443ae5f6fe41c335c14fe7dee6bce9818d842-5428196-images-thumbs&n=13",
      title: "No'xat Sho'rva",
      description:
        "Noʻxat (Cicer) — dukkaklilar oilasiga mansub bir yillik oʻtsimon oʻsimlik turkumi, dukkakli don ekini. 30 dan ortiq, asosan, koʻp yillik turlari Yevrosiyo, Shimoliy va Sharqiy Afrikada uchraydi. Juda qadimdan bir yillik madaniy turi (C. arietinum) Hindiston, Italiya, Ukraina janubi, Zakavkazye, Qozogʻiston, Oʻrta Osiyo, Gretsiya, Bolgariya, Misr, Jazoir, Turkiya va Eronda ekiladi. Madaniy N.ning ildizi —oʻq ildiz (100—150 sm). Poyasi oʻtsimon, tik oʻsadi, dagʻal, qovurgʻali, sershox, tukli, balandligi 30—70 sm",
      price: "3",
      category: "Suyuq Ovqat",
    },
    {
      id: 7,
      image:
        "https://avatars.mds.yandex.net/i?id=4709f63a56cf822fd66b949124e41e36876785be-5910573-images-thumbs&n=13",
      title: "Finchuza",
      description:
        "Salat (pazandachilikda) — turli sabzavotlar va mevalardan, tuxum, goʻsht va boshqa qoʻshib tayyorlanadigan yaxna taom. Salatning alohida turlariga goʻsht, qazi, tuxum, qaymoq, qatiq, ziravor, oshkoʻki va boshqa ham qoʻshiladi. Salat taom xazmini yengillashtiradi, uni vitaminlar bilan boyitadi. Oʻzbek pazandachiligida maxsus texnologiya bilan tayyorlanadigan turlari — goʻshtli, sabzavotli, pishlokli, mevali va boshqa Salatlar bor. Bulardan eng ommalashgani: achchshchuchuk (shakarob).",
      price: "3",
      category: "Salat",
    },
    {
      id: 8,
      image:
        "https://avatars.mds.yandex.net/i?id=e5df426a5d17f529338661f02c51745ecb0455a9-4409822-images-thumbs&n=13",
      title: "Pepsi",
      description:
        "Asl retseptda shakar va vanilin ham bor edi. Bredxem jozibali va ovqat hazm qilish va energiyani oshirishga yordam beradigan gazli ichimlik yaratishga intildi va uning tarkibida hech qanday noodatiy unsur qoshilmaydi uning mazasi odamning tanasi talab qiladigan vitaminlarga bogliq bolgani uchun omma ichiga tez kirib bordi.",
      price: "3",
      category: "Ichimlik",
    },
  ];

  const getFilterText = (filterText) => {
    if (filterText.toLowerCase() === "barcha maxsulotlar") {
      setData(dishes);
      return;
    }

    const filterData = dishes.filter(
      (item) => item.category.toLowerCase() === filterText.toLowerCase()
    );

    setData(filterData);
  };

  return (
    <div>
      <Header />
      <Categories getFilterText={getFilterText} />
      <DishesList data={data} />
    </div>
  );
}

export default App;
