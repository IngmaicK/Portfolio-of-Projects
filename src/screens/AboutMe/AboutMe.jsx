import "./AboutMe.css";

// let imgUrl = "https://picsum.photos/800"
let imgUrl = "https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/248502508_10158581568419016_2353949065944841310_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFkIhjy8lSm6uKdWGnhSe2SCoF7vBRNN6IKgXu8FE03ogAjtfiAdGVHKJ5TmVq_BeFuHjZ8Y5NtuZZ6P28ggqWT&_nc_ohc=yF0mzK4GyZAAX_G9ebV&_nc_ht=scontent.ftij3-2.fna&oh=00_AT8ou34_PvCIsZSVPqGvoX0RXacX1ZIs8dHuhUg9YM4p4A&oe=630E79EB"

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={imgUrl} alt="aboutme"/>
      <div>
        <h1>About Me</h1>
        <p>
          I'm an Electrical and Mechanical Engineer specialized on manufacturing process, automation and currently i'm focused on develop a digital mindset to implement on Smart Factory Solutions. I like to Brew my Own Beer and Write my own Code.

        </p>
      </div>
    </div>
  )
}

export default AboutMe