import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Aux from "../../../hoc/_Aux";

import { addNotification } from "../../actions/others";
import ReactNotification from "react-notifications-component";
import { requestCore } from "../../api/axios";
import Loader from "../Loader";
import { Sensor } from "../Monitor/Sensor";
import { Actuator } from "../Monitor/Actuator";
import { TableData } from "./TableData"

class Dashboard extends React.Component {
  state = {
    loading: false,
    showStatics: false,
    notificationDOMRef: React.createRef(),
  };
  componentWillMount() {
    //this.getConnection();
  }

  getConnection() {
    requestCore.get("/connect");
  }


  onShowStatics() {
    this.setState({ showStatics: !this.state.showStatics });
  }

  render() {

    const { loading } = this.state;

    if (loading) {
      return (
        <Loader></Loader>
      )
    }

    return (
      <Aux>
        <Row>
          <Col>

            <Row>
              <Col>
                <Row>
                  <TableData />
                </Row>
                <Row>
                  <Col className="d-grid gap-8">
                    <Button onClick={() => this.onShowStatics()}>{!this.state.showStatics ? "Ver Graficas" : "Ocultar Graficas"}</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>

                {
                  this.state.showStatics ? (
                    <Sensor />
                  ) : (<> </>)
                }
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Actuator />
          </Col>
        </Row>
      </Aux>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
function mapStateToProps(props) {
  return {
    user: props.user,
  };
}

export default connect(mapStateToProps)(Dashboard);
