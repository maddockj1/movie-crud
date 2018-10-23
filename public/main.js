document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  addNew()
  getReports()

})

function getReports() {
  axios.get('/movies')
    .then((response) => {
        // handle success
        console.log(response.data);
        //clear out reports
        let tbody = document.querySelector('#movies')
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }

        //DOM so table elements up in here

        response.data.forEach((report) => {
          let tr = document.createElement('tr')
          let title = document.createElement('td')
          let director = document.createElement('td')
          let year = document.createElement('td')
          let myRating = document.createElement('td')
          let poster = document.createElement('td')
          let del_td = document.createElement('td')
          let deleteButton = document.createElement('button')
          let posterSrc = document.createElement('img')
          let up_td = document.createElement('td')
          let updateButton = document.createElement('button')
          title.innerText = report.Title
          director.innerText = report.Director
          year.innerText = report.Year
          myRating.innerText = report.myRating
          posterSrc.src = report.poster
          deleteButton.innerText = "X"
          deleteButton.setAttribute('data-id', report.id)
          deleteButton.addEventListener('click', (ev) => {
            let recordId = ev.target.getAttribute('data-id')
            //console.log('id', recordId);
            //delete axios stlyzs
            axios.delete(`/movies/${recordId}`)
              .then((response) => {
                console.log(response)
                ev.target.parentElement.parentElement.remove()
              })
              .catch((err) => {
                console.log(err)
              })
          })
          updateButton.innerText = "Update"
          updateButton.setAttribute('up-id', report.id)
          let titleF = document.getElementById('title')
          //console.log(titleF.innerText)
          let directorF = document.getElementById('director')
          let yearF = document.getElementById('year')
          let myRatingF = document.getElementById('myRating')
          let posterF = document.getElementById('poster')
          updateButton.addEventListener('click', (ev) => {
            let recordId = ev.target.getAttribute('up-id')
            //console.log('id', recordId);
              ev.target.parentElement.remove()
              let upData = response.data[0]
              console.log(upData.Title)
              titleF.value= upData.Title
              directorF.value =upData.Director
              yearF.value = upData.Year
              myRatingF.value = upData.myRating
              posterF.value = upData.poster
              })
    document.getElementById('update-button').addEventListener('click', (ev) => {
          ev.preventDefault()

      axios.patch(`/movies/${recordId}`, )
        .then((response) => {
          //console.log(response.data[0].Title)
          

          //ev.target.parentElement.
        })
        .catch((err) => {
          console.log(err)
        })
    })



          up_td.appendChild(updateButton)
          del_td.appendChild(deleteButton)
          tr.appendChild(title)
          tr.appendChild(director)
          tr.appendChild(year)
          tr.appendChild(myRating)
          tr.appendChild(poster)
          poster.appendChild(posterSrc)
          tr.appendChild(del_td)
          tr.appendChild(up_td)
          tbody.appendChild(tr)

        })

      })
      .catch((err) => {
        console.log(err)
      })
    }









function addNew(){
  let form= document.getElementById('add-movie')

  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    console.log("ev", ev.id);

    //grab all the form values
    let postData = {}
    let formElements = ev.target.elements

    for(var i=0; i< formElements.length; i++) {
      let inputName = formElements[i].name
      if( inputName ) {
        postData[inputName] = formElements[i].value
      }
    }
    console.log("postData", postData)

    //post them datas from the front end to the back whhhhhaaaatt???
    axios.post('/movies', postData)
    .then((response) => {
      console.log(response)
      getReports()
    })
    .catch((err) => {
      console.log(err)
    })
  })
}
