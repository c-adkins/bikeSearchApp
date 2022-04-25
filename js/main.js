

document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const make= document.querySelector('input[name="make"]').value
  const year = document.querySelector('input[name="year"]').value
  const model = document.querySelector('input[name="model"]').value
  const url = `https://motorcycle-specs-database.p.rapidapi.com/article/${year}/${make}/${model}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'c5fecd31c8msh1a162e071896084p175f5cjsnbab7f653e50d'
    }
  };
  
  fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        document.getElementById("pic").src=data.articleImage.link
                    
          const price = data.articleCompleteInfo.priceName
          const seatHeight = data.physicalMeasuresAndCapacities.seatHeightName
          const disp = data.engineAndTransmission.displacementName
          const hp = data.engineAndTransmission.powerName
          
          const container = document.querySelector('#specs');

          const priceElement = document.createElement('h3');
          priceElement.textContent = `Price:  ${price}`;
          container.appendChild(priceElement);

          const seatElement = document.createElement('h3');
          seatElement.textContent = `Seat Height:  ${seatHeight}`;
          container.appendChild(seatElement);

          const dispElement = document.createElement('h3');
          dispElement.textContent = `Displacement:  ${disp}`;
          container.appendChild(dispElement);

          const hpElement = document.createElement('h3');
          hpElement.textContent = `Horse Power:  ${hp}`;
          container.appendChild(hpElement);



          const stats = [price,seatHeight,disp,hp]
 
              })
        .catch(err => alert('Model not found'));

            }


