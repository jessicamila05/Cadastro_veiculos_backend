const mongoose = require("../../database");


const VehicleSchema = new mongoose.Schema({
    
    modelVehicle:{
        type: String,
        required: true,
    },

    licensePlate:{    //placa do veiculo 
        type: String,
        unique:true,
        required: true, 
    },

    manufacturer:{      //fabricante do veiculo 
        type: String,
        required: true,
    },
    purchasePrice:{      //valor de compra...
        type: String,
        required: true,
    },
   
    saleValue:{      //valor de venda...
        type: String,
        required: false,
    },

    purchaseDate:{   //data de compra...
        type: Date,
        require: true,
    },

    saleDate:{ //data de venda...
        type: Date,
        require: true,
    }, 
    
    situation:{
        type: String,
        required: true,

    }
   
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;