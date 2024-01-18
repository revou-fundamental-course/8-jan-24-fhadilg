document.addEventListener('DOMContentLoaded', function () {
    // calculate luas persegi
    function hitungLuasPersegi() {
        var sisiLuas = parseFloat(document.getElementById('sisi-luas').value);
        if (!isNaN(sisiLuas)) {
            var luas = sisiLuas * sisiLuas;
            // alert('Luas Persegi: ' + luas);
            document.getElementById("luas").innerHTML = "Luas = Sisi x Sisi" + "\nLuas = " + sisiLuas + "x" + sisiLuas + "\nLuas = " + luas;
        } else {
            alert('Masukkan nilai sisi yang valid.');
        }
    }
  
    // calculate keliling persegi
    function hitungKelilingPersegi() {
        var sisiKeliling = parseFloat(document.getElementById('sisi-keliling').value);
        if (!isNaN(sisiKeliling)) {
            var keliling = 4 * sisiKeliling;
            // alert('Keliling Persegi: ' + keliling);
            document.getElementById("keliling").innerHTML = "Keliling = 4 x Sisi" + "\nKeliling = 4 x" + sisiKeliling + "\nKeliling = " + keliling;
        } else {
            alert('Masukkan nilai sisi yang valid.');
        }
    }
  
    // Reset function
    function resetForm() {
        document.getElementById('sisi-luas').value = '';
        document.getElementById('sisi-keliling').value = '';
        document.getElementById("luas").innerHTML = "";
        document.getElementById("keliling").innerHTML = "";
    }
  
    // luas button
    document.querySelector('#home button').addEventListener('click', function () {
        hitungLuasPersegi();
    });
  
    // keliling button
    document.querySelector('#profile button').addEventListener('click', function () {
        hitungKelilingPersegi();
    });
  
    // reset button
    document.querySelectorAll('.btn-warning').forEach(function (btn) {
        btn.addEventListener('click', function () {
            resetForm();
        });
    });
  });