popuniPodatke = (ucitajPodatke) => {
    document.getElementById("spoljni").innerHTML = " ";
    for (let i = 0; i < ucitajPodatke.length; i++) {
        var unutrasnji = document.createElement("div");


        let IDproizvoda = document.createElement("div");
        var naslovID = document.createElement("h4");
        unutrasnji.appendChild(IDproizvoda);
        unutrasnji.appendChild(naslovID);
        naslovID.innerHTML = ucitajPodatke[i].proizvodID

        let nazivProizvoda = document.createElement("div");
        var naslovPr = document.createElement("h4");
        unutrasnji.appendChild(naslovPr);
        unutrasnji.appendChild(nazivProizvoda);
        naslovPr.innerHTML = ucitajPodatke[i].naziv;


        let slikaProizvoda = document.createElement("img");
        slikaProizvoda.setAttribute("src", ucitajPodatke[i].slikaUrl);
        slikaProizvoda.setAttribute("width", "200");
        slikaProizvoda.setAttribute("height", "200");
        unutrasnji.appendChild(slikaProizvoda);
        slikaProizvoda.innerHTMl = ucitajPodatke[i].slikaUrl;

        let cijena = document.createElement("div");
        var cijenaN = document.createElement("h4");
        unutrasnji.appendChild(cijenaN);
        unutrasnji.appendChild(cijena);
        cijenaN.innerHTML = ucitajPodatke[i].cijenaPoKvadratu;
        spoljni.appendChild(unutrasnji);

        let button = document.createElement("button");
        button.setAttribute("id", ucitajPodatke[i].proizvodID);
        button.setAttribute("onclick", "dodajUFormu(this.id)");
        button.innerHTML = "Naruci";
        unutrasnji.appendChild(button);
        spoljni.appendChild(unutrasnji);
    }
}
dodajUFormu = (id) => {
    document.getElementById("proizID").value = id;
}

ucitajPodatke = () => {
    fetch('http://onlineshop.wrd.app.fit.ba/api/ispit20190914/Narudzba/GetProizvodiAll')

        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Geska: ' +
                        response.status);
                    return;
                }
                response.json().then((data) => {
                    console.log(data);
                    popuniPodatke(data);
                });
            }
        )
        .catch((err) => {
            console.log('Fetch Greska :-S', err);
        });
}




posaljiNarudzbu = () => {
    let narudzba = {
        adresa: document.getElementById("adresa").value,
        email: document.getElementById("email").value,
        ime: document.getElementById("ime").value,
        komada: document.getElementById("komada").value,
        prezime: document.getElementById("prezime").value,
        proizID: document.getElementById("proizID").value
    }
    console.log(narudzba);
    document.getElementById("narudzbaW").innerHTML += "Ime: " + narudzba.ime + "<br></br>";
    document.getElementById("narudzbaW").innerHTML += "Prezime: " + narudzba.prezime + "<br></br>";
    document.getElementById("narudzbaW").innerHTML += "Adresa: " + narudzba.adresa + "<br></br>";
    document.getElementById("narudzbaW").innerHTML += "ID proizvoda: " + narudzba.proizID + "<br></br>";
    document.getElementById("narudzbaW").innerHTML += "Komada: " + narudzba.komada + "<br></br>";
    document.getElementById("narudzbaW").innerHTML += "E-mail: " + narudzba.email;
}
