import College from "./College"

function MainPage() {

     let collegedata = [
        {
            name: "IIT Bombay",
            city: "Bomaby",
            website: "www.iit.com",
            Student: [
                {
                    name: 'Amana',
                    age: 30,
                    email: "amand@gmail.com"
                },
                 {
                    name: 'Kajal',
                    age: 20,
                    email: "kajal@gmail.com"
                },
                 {
                    name: 'Namana',
                    age: 27,
                    email: "naman@gmail.com"
                }
            ]
        },


        {
            name: "IIT Pune",
            city: "Pune",
            website: "www.iitpune.com",
            Student: [
                {
                    name: 'Meera',
                    age: 23,
                    email: "meera@gmail.com"
                },
                 {
                    name: 'Kirana',
                    age: 28,
                    email: "kiran@gmail.com"
                },
                 {
                    name: 'Pranit',
                    age: 26,
                    email: "pranit@gmail.com"
                }
            ]
        },

        {
            name: "IIT Kanpur",
            city: "Kanpur",
            website: "www.iitkanpur.com",
            Student: [
                {
                    name: 'Geeta',
                    age: 21,
                    email: "geeta@gmail.com"
                },
                 {
                    name: 'Priya',
                    age: 24,
                    email: "priya@gmail.com"
                },
                 {
                    name: 'Mahima',
                    age: 27,
                    email: "Mahima@gmail.com"
                }
            ]
        }


    ]
  return (
    <div>
        <h3>College Details</h3>

        <div>

            {
            collegedata.map((college, index)=>(
                <College college = {college} index={index}/>
            ))
        }

        </div>
        
        

    </div>
  )
}

export default MainPage