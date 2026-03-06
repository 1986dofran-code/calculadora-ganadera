from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def calcular():

    resultado = ""

    if request.method == "POST":
        vacas = int(request.form["vacas"])
        litros = float(request.form["litros"])
        precio = float(request.form["precio"])
        gastos = float(request.form["gastos"])

        produccion_total = vacas * litros
        ingresos = produccion_total * precio
        ganancia = ingresos - gastos

        resultado = f"""
        Producción total: {produccion_total} litros <br>
        Ingresos: ${ingresos} <br>
        Ganancia: ${ganancia}
        """

    return f"""
    <h2>Calculadora de Producción de Leche</h2>

    <form method="post">
        Número de vacas:<br>
        <input type="number" name="vacas" required><br><br>

        Litros por vaca:<br>
        <input type="number" step="any" name="litros" required><br><br>

        Precio por litro:<br>
        <input type="number" step="any" name="precio" required><br><br>

        Gastos diarios:<br>
        <input type="number" step="any" name="gastos" required><br><br>

        <button type="submit">Calcular</button>
    </form>

    <h3>{resultado}</h3>
    """

if __name__ == "__main__":
    app.run(debug=True)