class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {

        var cardapio = [
            {
                "code": "cafe",
                "value": 3.0
            },
            {
                "code": "chantily",
                "value": 1.5
            },
            {
                "code": "suco",
                "value": 6.2
            },
            {
                "code": "sanduiche",
                "value": 6.5
            },
            {
                "code": "queijo",
                "value": 2.0
            },
            {
                "code": "salgado",
                "value": 7.25
            },
            {
                "code": "combo1",
                "value": 9.5
            },
            {
                "code": "combo2",
                "value": 7.5
            }
        ];

        // var value = cardapio.find(item => item[`code`] == itens).value;
        // console.log(novoArray);

        var resultado = 0;

        if (itens == undefined) {
            return "N\u00e3o h\u00e1 itens no carrinho de compra!";
        } else if (metodoDePagamento == "dinheiro") {

            var soma = 0;

            itens.forEach(element => {

                var myArray = element.split(",");
                var code = myArray[0];

                var quantidade = myArray[1];
                var value = cardapio.find(item => item[`code`] == code).value;


                soma = soma + (value * quantidade);

            });
            var res = soma * 0.95;
            var numFormat = res.toFixed(2)
            resultado = "R$ " + numFormat;
        }
        else if (metodoDePagamento == "credito") {

            var soma = 0;

            itens.forEach(element => {

                var myArray = element.split(",");
                var code = myArray[0];

                var quantidade = myArray[1];
                var value = cardapio.find(item => item[`code`] == code).value;

                soma = soma + (value * quantidade);

            });
            var res = soma * 1.03;
            var numFormat = res.toFixed(2)
            resultado = "R$ " + numFormat;
        }
        else if (metodoDePagamento == "debito") {
            var soma = 0;

            itens.forEach(element => {

                var myArray = element.split(",");
                var code = myArray[0];

                var quantidade = myArray[1];
                var value = cardapio.find(item => item[`code`] == code).value;

                soma = soma + (value * quantidade);

            });
            var res = soma;
            var numFormat = res.toFixed(2)
            resultado = "R$ " + numFormat;
        }
        else {
            return "Forma de pagamento inv\u00e1lida!"
        }

        return resultado.replace(".",",");
    }

}

export { CaixaDaLanchonete };
