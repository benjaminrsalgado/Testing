import UIKit

func calcularDescuento(_ precio: Double, _ porcentaje: Double) -> Double{
    let division = porcentaje / 100
    let operacion = precio * division
    let operacion2 = precio - operacion
    return operacion2
}

let resultado = calcularDescuento(800, 20.0)
print(resultado)
