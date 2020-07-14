import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

//? (1) History me permite navegar a traves del sitio, pusheo las paginas a las que quiero ir
//?     y popeando en caso que yo quiera retroceder a un sitio (funciona como un stack)
//?     IMPORTANTE: No se pasa por parametro (y por ende no se pide), lo puedo usar porque
//?     lo estoy usando desde un Router (a HomeContainer lo llama un componente Router)
//?     este es el requisito para usarlo (history viene dentro de Router).
//?     Esta propiedad es inyectada si llamo al componente directamente desde Router, si desde
//?     Router llamo a una arrow function que llama a HomeContainer, no voy a poder usar history
//?     En caso que yo quisiera que mi componente funcione independientemente de como es llamado,
//?     deberia exportar como `withRouter(HomeContainer)` ya que `withRouter` es un 'decorator'
//?     lo cual significa que agrega funcionalidad a mi componente.

class HomeContainer extends Component {

  handleOnClick = () => {
    console.log("handleOnClick");
    this.props.history.push('/customers'); //! (1)
  }
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Esta es la pantalla inicial
              <CustomersActions>
                <button onClick={this.handleOnClick}>Listado de clientes</button>
              </CustomersActions>
            </div>
          }

          ></AppFrame>
      </div>
    );
  }
}

export default withRouter(HomeContainer);