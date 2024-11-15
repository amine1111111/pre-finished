let data = [
    {
        name : 'football' ,
        title : "football is never done",

            clientType :"athelete",
            talent :"marcos alonso" ,
            mark : "nike" ,
            location :"barcelona,spain",
            director : "Joaco Gasset",

        video : "videos/oneWork/football/fluid-vid.mp4",
        desc : "We work on designing innovative strategies with the aim of generating impactful campaigns. We accompany Marcos both personally and professionally, managing all his communications globally." ,


            smVid :"videos/oneWork/football/fluid-vid.mp4",
            img : "images/oneWork/football/lg-img.webp" ,
            mdTitle :"Working with a world class athlete ",
            fp : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him." ,
            p : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him.",


        laptopVid :"videos/oneWork/football/fluid-vid.mp4" ,
    },

    {
        name : 'born' ,

        title : "born man",

            clientType :"brand",
            talent :"Mauro Silva" ,
            mark : "born" ,
            location :"madrid,spain",
            director : "Joaco Gasset",

        video : "videos/oneWork/football/fluid-vid.mp4",
        desc : "Following their successful women's clothing collections, BORN challenged us to collaborate on the launch of their first men's collection. The goal was to attract this new audience by showcasing the versatility and dynamic design of their garments." ,


        
        smVid :"videos/oneWork/football/fluid-vid.mp4",
        img : "images/oneWork/born/lg-img.webp" ,
        mdTitle :"Working with a world class athlete ",
        fp : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him"  ,
        p : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him.",

 
            dragOneImg :"images/about/1.webp",
            dragOneVid :"images/about/1.webp",
       
            dragTwoImg :"images/about/1.webp",
            dragTwoVid :"images/about/1.webp",

        laptopVid :"videos/oneWork/football/fluid-vid.mp4" ,
    },


    {
        name : 'bewatt' ,
        title : "passion for padel",

            clientType :"brand",
            talent :"starvie players" ,
            mark : "starvie" ,
            location :"madrid,spain",
            director : "mauricio garrido",

        video : "videos/oneWork/bewatt/fluid.mp4",
        desc : "New technologies were implemented in 2024 by Starvie, the texture on the molds evolved, and new color ranges were introduced. We realized that Starvie's greatest artisan tradition and the new cutting edge technology merged in this new release. That was the foundation upon which the campaign was devised." ,

            smVid :"videos/oneWork/bewatt/video-sm.mp4",
            img : "images/oneWork/bewatt/i.webp" ,
            mdTitle :"Starvie Special Edition ",
            fp : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him"  ,
            p : "It's not just about big campaigns. Starvie places great importance on communication and develops various projects and activations throughout the year to keep the brand alive.",

        laptopVid :"videos/oneWork/bewatt/laptop(1).mp4" ,
    },

    {
        name : 'ride' ,
        title : "unleash the ride",

            clientType :"brand",
            talent :"Jorge Herrero Marban" ,
            mark : "bewatt" ,
            location :"Alquife, Granada",
            director : "A. Benito & J. Gasset",

        video : "videos/oneWork/ride/fluid.mp4",
        desc : "Bewatt is designed to conquer mountains, forgotten trails and navigate city streets with ease. In this campaign, we aimed to place one of their bikes in a challenging and unique environment, to push it to the limit and showcase the full potential of its capabilities." ,

            smVid :"",
            img : "images/oneWork/ride/img-lg.webp" ,
            mdTitle :"Starvie Special Edition ",
            
            fp : "The career of a professional athlete is not always easy. Managing the communication of Marcos is a great challenge. We feel very fortunate to be part of his Team, and to be able to share extra-sporting moments with him"  ,
            p : "It's not just about big campaigns. Starvie places great importance on communication and develops various projects and activations throughout the year to keep the brand alive.",


        laptopVid :"videos/oneWork/ride/laptop.mp4" ,
    },
]
localStorage.setItem("project-data", JSON.stringify(data))



let chapterArr;
function renderSinglePage(){

    let data = JSON.parse(localStorage.getItem('project-data'));

    let selectedBox = localStorage.getItem('selectedBox');

    
    let selectedData = data.find(item => item.name === selectedBox);
    document.title = `${selectedData.title.charAt(0).toUpperCase()}${selectedData.title.slice(1)} - TWICE©`;
    
    
    if (selectedData) {
        document.querySelector('[data-title]').textContent = selectedData.title;
        document.querySelector('[data-client-type]').textContent = selectedData.clientType;
        document.querySelector('[data-talent]').textContent = selectedData.talent;
        document.querySelector('[data-location]').textContent = selectedData.location;
        document.querySelector('[data-director]').textContent = selectedData.director;
        document.querySelector('[data-desc]').textContent = selectedData.desc;
        document.querySelector('[data-video]').src = selectedData.video;
        document.querySelector('[data-sm-video]').src = selectedData.smVid;
        document.querySelector('[data-md-title]').textContent = selectedData.mdTitle;
        document.querySelector('[data-fp]').textContent = selectedData.fp;
        document.querySelector('[data-p]').textContent = selectedData.p;
        document.querySelector('[data-img]').src = selectedData.img;
        document.querySelector('[laptop]').src = selectedData.laptopVid;
    
        let markElements = document.querySelectorAll('[data-mark]');
        markElements.forEach((e, i) => {
            if (i < selectedData.mark.length) {
                e.textContent = selectedData.mark;
            }
        });







        switch(selectedData.name) {
            case "bewatt" :
                chapterArr = [
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/bewatt/drag-1.png",
                        span: "drax",
                        p :"",
                    },
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/bewatt/drag-2.png",
                        span: "the sweet spot",
                        p :"",
                    }
                ];
                
            break;

            case "football" :
                chapterArr = [
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/football/drag-img-1.jpg",
                        span: "drax",
                        p :"",
                    },
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/football/drag-img-2.jpg",
                        span: "the sweet spot",
                        p :"",
                    }
                ];
            break;

            case "born" :
                chapterArr = [
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/born/drag-img-1.webp",
                        span: "drax",
                        p :"",
                    },
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/born/drag-img-2.webp",
                        span: "the sweet spot",
                        p :"",
                    }
                ];
            break;


           
            case "ride" :
                chapterArr = [
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/ride/drag-img-1.jpg",
                        span: "drax",
                        p :"",
                    },
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/ride/drag-img-2.jpg",
                        span: "the sweet spot",
                        p :"",
                    },
                    {
                        videoSrc: "videos/about/1.mp4",
                        imgSrc: "images/oneWork/ride/drag-img-3.jpg",
                        span: "the sweet spot",
                        p :"",
                    }
                ];
            break;
        }
    }
}

renderSinglePage()
