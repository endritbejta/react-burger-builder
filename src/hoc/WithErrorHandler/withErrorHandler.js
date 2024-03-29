import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearErorr] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <Modal show={error} modalClosed={clearErorr}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};
export default withErrorHandler;
