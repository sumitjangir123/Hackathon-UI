import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="text-center text-white fixed-bottom" style={{backgroundColor: "#011542"}}>

       <div style={{display:"flex",justifyContent:"space-around",height:"50px"}} className="p-1">
        
            <div>
                <img style={{maxWidth:"70px", border:'1px solid white'}} className="rounded m-1"
                    src="https://cdn.corporate.walmart.com/dims4/WMT/0c97a15/2147483647/strip/true/crop/263x263+0+0/resize/1960x1960!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fbf%2Fa8%2F1404da3948a7b5f547b51d206191%2Fgap-logo-small.jpg"/>
            </div>

            <div>
                <img style={{maxWidth:"70px", border:'1px solid white'}} className="rounded m-1"
                        src="https://scontent.fjai4-1.fna.fbcdn.net/v/t39.30808-6/275104695_10159689517769076_5762642400025756788_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=r60SKJDldf4AX8iC1bE&_nc_ht=scontent.fjai4-1.fna&oh=00_AT8ZpyelAIX7lFrY7eY16ddIT69v6cP6Seh_pqw50YknZw&oe=62FD39AD"
                    />
            </div>
            <div>
                <img    style={{maxWidth:"70px", border:'1px solid white'}} className="rounded m-1"
                        src="https://logodix.com/logo/877277.png"
                    />
            </div>
            <div>
                <img    style={{maxWidth:"100px", border:'1px solid white'}} className="rounded m-1"
                        src="https://i.pinimg.com/originals/5d/fe/df/5dfedffd56902427db17642a6a2241dd.jpg"
                    />
            </div>
       </div>
        <div
          className="text-center p-1"
          style={{backgroundColor:"#011542" }}
        >
          <a className="text-white badge bg-primary" style={{fontWeight:"bold"}} href="#">
            GAP INC
          </a>
        </div>
      </footer>
    </div>
  );
}
