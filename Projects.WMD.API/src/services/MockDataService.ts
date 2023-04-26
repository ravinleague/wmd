import { IMockDataService } from "../interfaces/IMockDataService";
import { IUserProfile } from "../interfaces/IUserProfile";

export default class MockDataService implements IMockDataService{
    getAllProfiles(): Promise<IUserProfile[]> {
        let mockProfileData:IUserProfile[] = 
                    [
                        {profileId:1,firstName:"Clarance",lastName:"Sussems",email:"csussems0@indiatimes.com",age:61,dateOfBirth:"2/2/2023",gender:"사회과학원 어학연구소",profilePicUrl:"http://dummyimage.com/190x100.png/dddddd/000000"},
                        {profileId:2,firstName:"Ginevra",lastName:"Kellett",email:"gkellett1@cnet.com",age:67,dateOfBirth:"11/30/2022",gender:"1",profilePicUrl:"http://dummyimage.com/173x100.png/dddddd/000000"},
                        {profileId:3,firstName:"Jude",lastName:"Jowers",email:"jjowers2@simplemachines.org",age:1,dateOfBirth:"10/3/2022",gender:"👾 🙇 💁 🙅 🙆 🙋 🙎 🙍 ",profilePicUrl:"http://dummyimage.com/231x100.png/5fa2dd/ffffff"},
                        {profileId:4,firstName:"Trev",lastName:"Strute",email:"tstrute3@forbes.com",age:15,dateOfBirth:"11/7/2022",gender:" ",profilePicUrl:"http://dummyimage.com/225x100.png/5fa2dd/ffffff"},
                        {profileId:5,firstName:"Brittne",lastName:"Dursley",email:"bdursley4@un.org",age:81,dateOfBirth:"1/18/2023",gender:"␡",profilePicUrl:"http://dummyimage.com/169x100.png/cc0000/ffffff"},
                        {profileId:6,firstName:"Adrian",lastName:"Balmforth",email:"abalmforth5@ucsd.edu",age:74,dateOfBirth:"7/18/2022",gender:"⁦test⁧",profilePicUrl:"http://dummyimage.com/113x100.png/cc0000/ffffff"},
                        {profileId:7,firstName:"Constantia",lastName:"Allred",email:"callred6@chronoengine.com",age:64,dateOfBirth:"3/16/2023",gender:"__ﾛ(,_,*)",profilePicUrl:"http://dummyimage.com/184x100.png/5fa2dd/ffffff"},
                        {profileId:8,firstName:"Franky",lastName:"Yokley",email:"fyokley7@parallels.com",age:56,dateOfBirth:"10/16/2022",gender:"ثم نفس سقطت وبالتحديد،, جزيرتي باستخدام أن دنو. إذ هنا؟ الستار وتنصيب كان. أهّل ايطاليا، بريطانيا-فرنسا قد أخذ. سليمان، إتفاقية بين ما, يذكر الحدود أي بعد, معاملة بولندا، الإطلاق عل إيو.",profilePicUrl:"http://dummyimage.com/184x100.png/dddddd/000000"},
                        {profileId:9,firstName:"Howie",lastName:"Feasey",email:"hfeasey8@friendfeed.com",age:17,dateOfBirth:"3/7/2023",gender:"ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",profilePicUrl:"http://dummyimage.com/195x100.png/ff4444/ffffff"},
                        {profileId:10,firstName:"Horatio",lastName:"Skunes",email:"hskunes9@alibaba.com",age:80,dateOfBirth:"9/2/2022",gender:"-1.00",profilePicUrl:"http://dummyimage.com/183x100.png/5fa2dd/ffffff"},
                        {profileId:11,firstName:"Conan",lastName:"Plumtree",email:"cplumtreea@i2i.jp",age:40,dateOfBirth:"12/24/2022",gender:"-1/2",profilePicUrl:"http://dummyimage.com/214x100.png/ff4444/ffffff"},
                        {profileId:12,firstName:"Margarette",lastName:"Frentz",email:"mfrentzb@bing.com",age:10,dateOfBirth:"4/6/2023",gender:"😍",profilePicUrl:"http://dummyimage.com/163x100.png/5fa2dd/ffffff"},
                        {profileId:13,firstName:"Sigismondo",lastName:"Robson",email:"srobsonc@nydailynews.com",age:57,dateOfBirth:"1/13/2023",gender:"הָיְתָהtestالصفحات التّحول",profilePicUrl:"http://dummyimage.com/101x100.png/5fa2dd/ffffff"},
                        {profileId:14,firstName:"Frederick",lastName:"Antunes",email:"fantunesd@soup.io",age:9,dateOfBirth:"2/12/2023",gender:"部落格",profilePicUrl:"http://dummyimage.com/178x100.png/5fa2dd/ffffff"},
                        {profileId:15,firstName:"Drud",lastName:"Gerge",email:"dgergee@exblog.jp",age:73,dateOfBirth:"8/16/2022",gender:"❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙",profilePicUrl:"http://dummyimage.com/247x100.png/dddddd/000000"},
                        {profileId:16,firstName:"Wynne",lastName:"Gumm",email:"wgummf@issuu.com",age:43,dateOfBirth:"5/22/2022",gender:"-1",profilePicUrl:"http://dummyimage.com/120x100.png/dddddd/000000"},
                        {profileId:17,firstName:"Hall",lastName:"Brussell",email:"hbrussellg@gnu.org",age:27,dateOfBirth:"4/12/2023",gender:"\"\"",profilePicUrl:"http://dummyimage.com/192x100.png/cc0000/ffffff"},
                        {profileId:18,firstName:"Jacky",lastName:"Kelland",email:"jkellandh@com.com",age:92,dateOfBirth:"9/2/2022",gender:"١٢٣",profilePicUrl:"http://dummyimage.com/132x100.png/5fa2dd/ffffff"},
                        {profileId:19,firstName:"Costa",lastName:"Cushe",email:"ccushei@multiply.com",age:29,dateOfBirth:"1/8/2023",gender:"null",profilePicUrl:"http://dummyimage.com/139x100.png/5fa2dd/ffffff"},
                        {profileId:20,firstName:"Fleurette",lastName:"Tidcombe",email:"ftidcombej@engadget.com",age:30,dateOfBirth:"7/21/2022",gender:"‪‪test‪",profilePicUrl:"http://dummyimage.com/107x100.png/ff4444/ffffff"},
                        {profileId:21,firstName:"Libbi",lastName:"Chastanet",email:"lchastanetk@wsj.com",age:25,dateOfBirth:"10/24/2022",gender:"ÅÍÎÏ˝ÓÔÒÚÆ☃",profilePicUrl:"http://dummyimage.com/110x100.png/dddddd/000000"},
                        {profileId:22,firstName:"Demetria",lastName:"Ebbage",email:"debbagel@123-reg.co.uk",age:30,dateOfBirth:"1/25/2023",gender:"1E2",profilePicUrl:"http://dummyimage.com/152x100.png/5fa2dd/ffffff"},
                        {profileId:23,firstName:"Samaria",lastName:"Gwinnett",email:"sgwinnettm@dot.gov",age:34,dateOfBirth:"6/17/2022",gender:"'",profilePicUrl:"http://dummyimage.com/219x100.png/dddddd/000000"}
                    ];
                    return Promise.resolve(mockProfileData);

                }

}