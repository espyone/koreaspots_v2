const koreaSpots = [
    {venue: 'Gwangmyeong Cave',	link:'http://naver.me/xJ4gtN2o', compass: 'W',	city: 'Gwangmyeong', province: 'Gyeonggi',	info: 'cave theme park', category: 'green',	korean:'광명동굴'},
    {venue: 'Songdo Monster VR',	link:'http://naver.me/GLjdOUUX', compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'송도 몬스터 VR'},
    {venue: 'Riot Skateshop',	link:'http://naver.me/GTOlqQJO', compass: 'W',	city: 'Bupyeong, Incheon', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'라이엇'},
    {venue: 'Songdo Tri-Bowl',	link:'http://naver.me/GsaruM84', compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'art attraction', category: '',	korean:'트라이보울'},
    {venue: 'Aramaru Observatory',	link:'http://naver.me/x8fJDQpL', compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info: 'bridge with a view', category: 'green',	korean:'아라마루전망대'},
    {venue: 'Ara Canal',	link:'http://naver.me/FMZ8ujKq', compass: 'W',	city: 'Incheon', province: 'Gyeonggi',	info:'', category:'green',	korean:'경인아라뱃길'},
    {venue: 'Seoul Grand Park',	link:'http://naver.me/532BKxlF', compass: 'W',	city: 'Gwacheon', province: 'Gyeonggi',	info: 'zoo etc near seoul land', category: '',	korean:'서울대공원분수광장'},
    {venue: 'Seoul Land',	link:'http://naver.me/xSrFCGhO', compass: 'W',	city: 'Gwacheon', province: 'Gyeonggi',	info: 'amusement park', category: '',	korean:'서울랜드'},
    {venue: 'Manseok Park X Arcade',	link:'http://naver.me/GBqYdgUt', compass: 'SW',	city: 'Suwon', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'만석공원X게임장'},
    {venue: 'Suwon Hwaeseong Fortress',	link:'https://naver.me/5B1voLse', compass: 'SW',	city: 'Suwon', province: 'Gyeonggi',	info: 'fortress', category: 'green',	korean:'수원화성'},
    {venue: 'Everland',	link:'http://naver.me/5JoY4W2N', compass: 'W',	city: 'Yongin', province: 'Gyeonggi',	info: 'amusement park', category: '',	korean:'에버랜드'},
    {venue: 'Daehwa skate park',	link:'http://naver.me/GuG2IgGt', compass: ' NW',	city: 'Goyang', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'일산 대화 레포츠 공원'},
    {venue: 'Gamaksan Mountain Chulreong Bridge',	link:'http://naver.me/IIvzUvxf', compass: 'NW',	city: 'Paju', province: 'Gyeonggi',	info: 'suspension bridge', category: 'green',	korean:'감악산 출렁다리'},
    {venue: 'Club MODECI',	link:'http://naver.me/FSCfv57z', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'클럽 MODECI'},
    {venue: 'Stitches Guesthouse',	link:'http://naver.me/FJHvR4jq', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'hostel', category: '',	korean:'스티치스 게스트하우스'},
    {venue: 'Club Sharp',	link:'http://naver.me/535Krg7Y', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'클럽 샤프'},
    {venue: 'Mapo Oil Tank Culture Park',	link:'http://naver.me/GAiBmDF3', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'art attraction', category: '',	korean:'문화비축기지'},
    {venue: 'WORST SKATESHOP',	link:'http://naver.me/x8lmsz56', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'WORST Skateshop'},
    {venue: 'Sinchon Severance Hospital Emergency Room',	link:'http://naver.me/FQ9qaJE6', compass: 'N [W]',	city: 'Seodaemun, Seoul', 	info:'hospital', category: '',	korean:'신촌 세브란스병원 응급실'},
    {venue: 'Timber Shop',	link:'http://naver.me/GkKUvisv', compass: 'N [W]',	city: 'Mapo, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'팀버샵'},
    {venue: 'PISTIL',	link:'http://naver.me/5azDz9Pr', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'PISTIL'},
    {venue: 'Seoul Community Radio',	link:'http://naver.me/xHkWvTGB', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'서울커뮤니티라디오'},
    {venue: 'Tussa Skateboards',	link:'http://naver.me/GLj3gfxd', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'투사스케이트보드'},
    {venue: 'Cakeshop Seoul',	link:'http://naver.me/FLCVNXjQ', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'Cakeshop Seoul'},
    {venue: 'Dragon Hill Spa',	link:'http://naver.me/5HUlHCKL', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'jjimjilbang', category: '',	korean:'드래곤힐스파'},
    {venue: 'VR Zone - I Park Mall Yongsan',	link:'http://naver.me/5WGVu8kZ', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'브이알존 용산아이파크몰점'},
    {venue: 'Billion Box Itaewon',	link:'http://naver.me/Gv9jtveQ', compass: 'N [W]',	city: 'Yongsan, Seoul', province: 'Gyeonggi',	info: 'restaurant', category: '',	korean:'빌리언박스 이태원점'},
    {venue: 'Liveclub Skunk',	link:'https://naver.me/xyuT9Lol', compass: 'N [SW]',	city: 'Yeongdeungpo, Seoul', province: 'Gyeonggi',	info: 'music venue', category: '',	korean:'Liveclub Skunk'},
    {venue: 'Coex Aquarium',	link:'http://naver.me/F5egd0Bz', compass: 'N [SE]',	city: 'Gangnam, Seoul', province: 'Gyeonggi',	info: 'aquarium', category: '',	korean:'코엑스아쿠아리움'},
    {venue: 'VR Zone Coex Branch',	link:'http://naver.me/GVYSxqv6', compass: 'N [SE]',	city: 'Gangnam, Seoul', province: 'Gyeonggi',	info: 'VR arcade', category: '',	korean:'브이알존 코엑스 직영점'},
    {venue: 'Lotte World Aquarium',	link:'http://naver.me/GDTsj5km', compass: 'N [SE]',	city: 'Songpa, Seoul', province: 'Gyeonggi',	info: 'aquarium', category: '',	korean:'롯데월드 아쿠아리움'},
    {venue: 'AORI skate shop',	link:'http://naver.me/G9RM33q4', compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'아오리파크'},
    {venue: 'Ttukseom Island Hangang Park X Arcade',	link:'http://naver.me/xu8joiqJ', compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate park', category: '',	korean:'뚝섬한강공원X게임장'},
    {venue: 'Board Korea Ttukseom Branch',	link:'http://naver.me/GNojzcRL', compass: 'N [E]',	city: 'Gwangjin, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	korean:'보드코리아 뚝섬점'},
    {venue: 'Savour Skateshop',	link:'http://naver.me/GLvib6FX', compass: 'N [E]',	city: 'Seongdong, Seoul', province: 'Gyeonggi',	info: 'skate shop', category: '',	},
    {venue: 'Korean Stone Art Museum',	link:'https://naver.me/xDsjY2JL', compass: 'N [NE]',	city: 'Seongbuk, Seoul', province: 'Gyeonggi',	info: 'art museum', category: '',	korean:'우리옛돌박물관'},
    {venue: 'Green Pedal Song Joong-Ang',	link:'http://naver.me/5NdgdOMd', compass: 'N [NE]',	city: 'Gangbuk, Seoul', province: 'Gyeonggi',	info: 'bicycle shop', category:'',	korean:'그린페달송중점'},
    {venue: 'Green Pedal Gangbuk-gu Beon-dong 467-13',	link:'http://naver.me/5wmRFfmL', compass: 'N [NE]',	city: 'Gangbuk, Seoul', province: 'Gyeonggi',	info: 'bicycle shop', category: '',	},
    {venue: 'Wonju Sogeumsan Chulreong Bridge',	link:'http://naver.me/xNvNaH2Z', compass:'SW',	city:'Wonju',	province:'Gangwon', info:'suspension bridge', category:'green',	korean:'원주소금산출렁다리'},
    {venue: 'Byeolmaro Astronomical Observatory',	link:'http://naver.me/FObyi8yY', compass:'S',	city:'Yeongwol',	province:'Gangwon', info:'astro observatory	', category:'green',korean:'별마로천문대'},
    {venue: 'Hwanseongul Cave',	link:'http://naver.me/F2tDJY67', compass:'E',	city:'Samcheok',	province:'Gangwon', info:'cave w/ wateralls', category:'green',	korean:'환선굴'},
    {venue: 'Grasshopper Cafe',	link:'http://naver.me/xgY7StI5', compass:'SE',	city:'Jeongseon',  	province:'Gangwon', info:'roadside attraction', category:'',	korean:'구절리역 정선선'},
    {venue: 'Phoenix Pyeongchang Snow Park',	link:'http://naver.me/5YkXYNMj', compass:'E',	city:'Pyeongchang',	province:'Gangwon', info:'snow park	', category:'',korean:'휘닉스평창스노우파크'},
    {venue: 'Reverty skate park',	link:'http://naver.me/xqf3p1qu', compass:'NE',	city:'Yangyang',	province:'Gangwon', info:'skate park', category:'',	},
    {venue: 'Ulsanbawi Rock entrance at Sinheungsa Temple',	link:'http://naver.me/52lhnuwp', compass:'NE',	city:'Sokcho',	province:'Gangwon', info:'mountain hike', category:'green',	korean:'신흥사'},
    {venue: 'Beopjusa Temple',	link:'http://naver.me/xrgGA4x6', compass:'W',	city:'Boeun-gun',	province:'Chungbuk', info:'buddhist temple', category:'',	korean:'법주사'},
    {venue: 'Chaebiwon jjimjilbang',	link:'http://naver.me/xJnAdLQa', compass:'NE',	city:'Chungju',	province:'Chungbuk', info:'jjimjilbang', category:'',	korean:'채비원'},
    {venue: 'Buseoksa Temple Ganeungile',	link:'http://naver.me/FctUAZkL', compass:'NE',	city:'Yeongju',	province:'Gyeongbuk', info:'buddhist temple', category:'',	korean:'부석사 가는길에'},
    {venue: 'Manbulsa Temple',	link:'http://naver.me/FZOutwx2', compass:'SE',	city:'Yeongcheon',	province:'Gyeongbuk', info:'buddhist temple', category:'',	korean:'만불사'},
    {venue: 'Gyeongju World',	link:'http://naver.me/FkTCXGA5', compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'amusement park', category:'',	korean:'경주월드'},
    {venue: 'Bulguksa Temple',	link:'http://naver.me/5ElvPTnE', compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'buddhist temple', category:'',	korean:'불국사'},
    {venue: 'Golgulsa Temple',	link:'http://naver.me/x6gr8QSQ', compass:'SE',	city:'Gyeongju',	province:'Gyeongbuk', info:'buddhist temple', category:'',	korean:'골굴사'},
    {venue: 'Uri Charcoal Habin Charcoal Indoor Sauna Cave',	link:'http://naver.me/GQmKumuu', compass:'S [W]',	city:'Dalseong, Degu',	province:'Gyeongbuk', info:'jjimjilbang', category:'',	korean:'우리참숯하빈숯굴'},
    {venue: 'Playground  indoor skate park',	link:'http://naver.me/5QDs2gI7', compass:'S [E]',	city:'Jung-gu, Daegu',	province:'Gyeongbuk', info:'skate park', category:'',	korean:'플레이그라운드스케이트파크'},
    {venue: 'Gimhae skatepark',	link:'http://naver.me/FUGVJnQH', compass:'SE',	city:'Gimhae',	province:'Gyeongnam', info:'skate park', category:'',	korean:'김해스케이트파크'},
    {venue: 'Monopatin skate shop',	link:'http://naver.me/FcUinssu', compass:'SE [W]',	city:'Sasang-gu, Busan',	province:'Gyeongnam', info:'skate shop', category:'',	korean:'모노파틴'},
    {venue: 'Songdo Marine Cable Car',	link:'http://naver.me/xj6aBjHu', compass:'SE [SW]',	city:'Seo-gu, Busan',	province:'Gyeongnam', info:'cable car ride', category:'green',	korean:'송도해상케이블카'},
    {venue: 'Seokbulsa Temple',	link:'http://naver.me/GPw3DZsJ', compass:'SE [NW]',	city:'Buk-gu, Busan',	province:'Gyeongnam', info:'buddhist temple', category:'',	korean:'석불사'},
    {venue: 'Beomeosa Temple',	link:'http://naver.me/5XPVNoyW', compass:'SE [NE]',	city:'Geumjeong-gu, Busan',	province:'Gyeongnam', info:'buddhist temple', category:'',	korean:'범어사'},
    {venue: 'Haedong Yonggungsa Temple', link:'http://naver.me/GxmCLPWg', compass:'SE [NE]',	city:'Gijang-gun, Busan',	province:'Gyeongnam', info:'buddhist temple', category:'',	korean:'해동용궁사'},
    {venue: 'Jiwon Public Bath',	link:'http://naver.me/FtgkdXUJ', compass:'SE [E]',	city:'Dongnae-gu, Busan',	province:'Gyeongnam', info:'jjimjilbang', category:'',	korean:'지원탕'},
    {venue: 'Oryukdo Skywalk',	link:'http://naver.me/G4rBlqtt', compass:'SE [SE]',	city:'Nam-gu, Busan',	province:'Gyeongnam', info:'skywalk / glass bridge', category:'green',	korean:'오륙도스카이워크'},
    {venue: 'Hotel AquaPalace Water Park & Jjimjilbang',	link:'https://naver.me/GOuzMpBm', compass:'SE [SE]',	city:'Suyeong-gu, Busan', province:'Gyeongnam', info:'jjimjilbang', category:'',	korean:'호텔아쿠아펠리스 워터파크 앤 찜질방'},
    {venue: 'Saryangdo Passenger Terminal - Jirisan Mountain',	link:'http://naver.me/xGHREA8v', compass:'S',	city:'Tongyeong',	province:'Gyeongnam', info:'suspension bridge', category:'green',	korean:'사량도여객선터미널'},
    {venue: 'Geoje bamboo theme park',	link:'http://naver.me/x1egQpym', compass:'S',	city:'Geoje',	province:'Gyeongnam', info:'bamboo forest', category:'green',	korean:'거제맹종죽테마파크'},
    {venue: 'Geoje botanical garden',	link:'http://naver.me/GfaMMOrd', compass:'S',	city:'Geoje',	province:'Gyeongnam', info:'botanical garden', category:'green',	korean:'거제식물원'},
    {venue: 'Guryong Village Bamboo Forest',	link:'http://naver.me/GEAui5hV', compass:'N',	city:'Damyang-gun',	province:'Jeonnam', info:'bamboo forest', category:'green',	korean:'죽녹원'},
    {venue: 'Hampyeong Expo Park Butterfly Insect Eco Center',	link:'http://naver.me/5ZGF5Ame', compass:'NW',	city:'Hampyeong-gun',	province:'Jeonnam', info:'insect + reptile zoo', category:'',	korean:'함평엑스포공원나비곤충생태관'},
    {venue: 'Hwasun Unjusa Temple',	link:'http://naver.me/F0Mn8T3g', compass:'C',	city:'Hwasun-gun',	province:'Jeonnam', info:'buddhist temple', category:'',	korean:'화순운주사'},
    {venue: 'Songgwangsa Temple Guksajeon Hall',	link:'http://naver.me/Ge8CX13v', compass:'SE',	city:'Suncheon',	province:'Jeonnam', info:'buddhist temple', category:'',	korean:'송광사국사전'},
    {venue: 'Jeonju Hanok Village',	link:'http://naver.me/GYOVH975', compass:'N',	city:'Jeonju',	province:'Jeonbuk', info:'old town village', category:'',	korean:'전주 한옥마을'},
    {venue: 'Korean house (Hanguk Jip) bibimap',	link:'http://naver.me/5zJoHjZz', compass:'N',	city:'Jeonju',	province:'Jeonbuk', info:'restaurant', category:'',	korean:'한국집'},
    {venue: 'Geumgang Suspension Bridge',	link:'http://naver.me/xRdw17sC', compass:'N',	city:'Jeonju + Wanju-gun',	province:'Jeonbuk', info:'suspension bridge', category:'green forest',	korean:'금강구름다리'},
    {venue: 'Daejeon Museum of Art',	link:'http://naver.me/xaPgHamS', compass:'SE',	city:'Seo-gu, Daejeon',	province:'Chungnam', info:'art museum', category:'',	korean:'대전시립미술관'}
    ]

const zoosAquariums = koreaSpots.filter(zoo => zoo.info.includes('zoo') || zoo.info.includes('aquarium'))
const skateParks = koreaSpots.filter(skate => skate.info.includes('skate') && !skate.info.includes('shop'))
const skateShops = koreaSpots.filter(skate => skate.info.includes('skate') && skate.info.includes('shop'))
const musicVenues = koreaSpots.filter(music => music.info === "music venue")
const artVenues = koreaSpots.filter(art => art.info.includes('art'))
const buddhistTemples = koreaSpots.filter(buddhist => buddhist.info.includes('temple'))
const amusementParks = koreaSpots.filter(amusement => amusement.info.includes('amusement')||amusement.info.includes('arcade'))
const outdoorsAttractions = koreaSpots.filter(outdoors => outdoors.category.includes('green'))



const provinceSelection = document.getElementById('province-select')

const temples = document.getElementById('temples')
const outdoors = document.getElementById('outdoors')
const skateparks = document.getElementById('skateparks')
const skateshops = document.getElementById('skateshops')

const screenOne = document.getElementById('screen_01')
const screenTwo = document.getElementById('screen_02')
const screenThree = document.getElementById('screen_03')
const goBack = document.getElementById('return')
const submit = document.getElementById('submit')
const goBack_Three = document.querySelector('.screen_03 .return')



function categoryScreen(a,b, province) {
    a.style.transition = "transform .5s"
    a.style.transform = "translateY(-150%)"
    b.style.transition = "transform 1.2s"
    b.style.transform = "translateX(0%)"
    categoryChecklist(province)
}
function listingScreen(a,b) {
    a.style.transition = "transform .5s"
    a.style.transform = "translateY(-150%)"
    b.style.transition = "transform 1.2s"
    b.style.transform = "translateX(0%)"
}

function listVenues(cat, filter, prov, passvar, passvar2) {
// console.log(filter)
if (cat.checked = true) {
    let results = 0
    // console.log(filter[0].city.toLowerCase())
    for (let j in filter) {
        current = filter[j].province.toLowerCase()
         if (prov === current || prov === 'all') {
        passvar.classList.add('hi')
        listText = `<p class='list'><span class='citytitle'>${filter[j].city}</span><span class='venuetitle'><a class="linky" href='${filter[j].link}' target="_blank" style="text-decoration:none;color:white;">${filter[j].venue}</a></span> <span class='provincetitle'>${filter[j].province}</span></p>`
        passvar.innerHTML += listText
        results++
        passvar2.innerHTML = results
        passvar2.style.backgroundColor = 'rgb(39, 47, 141)'
         }
    }
}
}

function categoryChecklist(province) {
temples.addEventListener('click', (e) => {
    const templesdiv = document.querySelector('.templesdiv')
    const templesdivtally = document.querySelector('.templesdivtally')
listVenues(temples, buddhistTemples, province, templesdiv, templesdivtally)
})
outdoors.addEventListener('click', (e) => {
    const outdoorsdiv = document.querySelector('.outdoorsdiv')
    const outdoorsdivtally = document.querySelector('.outdoorsdivtally')
    listVenues(outdoors, outdoorsAttractions, province, outdoorsdiv, outdoorsdivtally)
})
skateparks.addEventListener('click', (e) => {
    const skateparksdiv = document.querySelector('.skateparksdiv')
    const skateparksdivtally = document.querySelector('.skateparksdivtally')
    listVenues(skateparks, skateParks, province, skateparksdiv, skateparksdivtally)
})
skateshops.addEventListener('click', (e) => {
    const skateshopsdiv = document.querySelector('.skateshopsdiv')
    const skateshopsdivtally = document.querySelector('.skateshopsdivtally')
    listVenues(skateshops, skateShops, province, skateshopsdiv, skateshopsdivtally)
})
musicvenues.addEventListener('click', (e) => {
    const musicvenuesdiv = document.querySelector('.musicvenuesdiv')
    const musicvenuesdivtally = document.querySelector('.musicvenuesdivtally')
    listVenues(musicvenues, musicVenues, province, musicvenuesdiv, musicvenuesdivtally)
})
zoosaquariums.addEventListener('click', (e) => {
    const zoosaquariumsdiv = document.querySelector('.zoosaquariumsdiv')
    const zoosaquariumsdivtally = document.querySelector('.zoosaquariumsdivtally')
    listVenues(zoosaquariums, zoosAquariums, province, zoosaquariumsdiv, zoosaquariumsdivtally)
})
artvenues.addEventListener('click', (e) => {
    const artvenuesdiv = document.querySelector('.artvenuesdiv')
    const artvenuesdivtally = document.querySelector('.artvenuesdivtally')
    listVenues(artvenues, artVenues, province, artvenuesdiv, artvenuesdivtally)
})
amusementparks.addEventListener('click', (e) => {
    const amusementparksdiv = document.querySelector('.amusementparksdiv')
    const amusementparksdivtally = document.querySelector('.amusementparksdivtally')
    listVenues(amusementparks, amusementParks, province, amusementparksdiv, amusementparksdivtally)
})
}

provinceSelection.addEventListener('change', (e) => {
    let provinceResult = e.target.value

    categoryScreen(screenOne, screenTwo, provinceResult)
   
})

// goBack.addEventListener('click', () => {
//     option = document.querySelector('select')
//     option.value = ''
//     listingScreen(screenTwo, screenOne)

// })

// goBack_Three.addEventListener('click', () => {

// categoryScreen(screenThree, screenTwo)})

submit.addEventListener('click', () => {
    listingScreen(screenTwo, screenThree)})

