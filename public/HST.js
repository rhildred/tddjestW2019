class HST{
    calculate(nAmount, sProv){
        switch (sProv){
            case "MB":
            case "ON":
                return nAmount *.13;
            case "BC":
                return nAmount *.12;
            default:
                throw("unimplemented");

        }
    }
}

module.exports = HST;