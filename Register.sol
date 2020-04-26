pragma solidity >=0.4.22 <0.7.0;

contract Register {
    string private nombre;
    string private especie;
    string private raza;
    string private sexo;
    string private color;
    string private peso;

    function setMascota(string memory _nombre, string memory _especie,  string memory _raza, string memory _sexo, string memory _color, string memory _peso) public {
        nombre = _nombre;
        especie = _especie;
        raza = _raza;
        sexo = _sexo;
        color = _color;
        peso = _peso;
    }

    function getNombre() public view returns (string memory) {
        return nombre;
    }
    
    function getEspecie() public view returns (string memory) {
        return especie;
    }
    
    function getRaza() public view returns (string memory) {
        return raza;
    }
    
    function getSexo() public view returns (string memory) {
        return sexo;
    }
    
    function getColor() public view returns (string memory) {
        return color;
    }
    
    function getPeso() public view returns (string memory) {
        return peso;
    }
    

    
}
