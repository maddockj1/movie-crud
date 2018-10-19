document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  function getReports() {
    axios.get('/movies')
    .then((response) => {
      // handle success
      console.log(response);
//clear out reports
      let tbody = document.querySelector('#movies')
          while (tbody.firstChild) {
              tbody.removeChild(tbody.firstChild)
            }

//DOM so table elements up in here

response.data.forEach((report) =>{
  let tr = document.createElement('tr')
  let title = document.createElement('td')
  let director = document.createElement('td')
  let year = document.createElement('td')
  let myRating = document.createElement('td')
  let poster = document.createElement('td')
  let del_td = document.createElement('td')
  let deleteButton = document.createElement('button')

  title.innerText = report.title
  director.innerText = report.director
  year.innerText = report.year
  myRating.innerText = report.myRating
  poster.innerText = report.poster
  del_button.innerText= "X"
  del_button.setAttribute('data-id', report.id)
      del_button.addEventListener('click', (ev) => {
        let recordId = ev.target.getAttribute('data-id')
        console.log('id', recordId);
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
    




});
}
