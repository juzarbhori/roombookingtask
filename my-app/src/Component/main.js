import React, { Component } from 'react';


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            roomCount: 1,
            adultCount: 1,
            childrenCount: 0
        }
    }



    onPlusRoom = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        roomCount += 1;
        if (roomCount > 5) {
          return;
        }
        let totalPerson = adultCount + childrenCount;
        if (roomCount > totalPerson && adultCount == 1) {
          adultCount = roomCount * 4;
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };
      onMinusRoom = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        roomCount -= 1;
        if (!roomCount) {
          return;
        }
        let totalPerson = adultCount + childrenCount;
        if (totalPerson > roomCount * 4) {
          let exceded = totalPerson - roomCount * 4;
          for (let i = 1; i <= exceded; i++) {
            if (childrenCount) {
              childrenCount -= 1;
            } else {
              adultCount -= 1;
            }
          }
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };
    
      onPlusAdult = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        adultCount += 1;
        let totalPerson = adultCount + childrenCount;
        if (totalPerson > roomCount * 4) {
          roomCount = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
        }
        if (roomCount > 5) {
          return;
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };
    
      onMimusAdult = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        adultCount -= 1;
        if (!adultCount) {
          return;
        }
        let totalPerson = adultCount + childrenCount;
        if (totalPerson < roomCount) {
          let diff = roomCount - totalPerson;
          roomCount -= diff;
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };
    
      onPluschildrenCount = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        childrenCount += 1;
        let totalPerson = adultCount + childrenCount;
        if (totalPerson > roomCount * 4) {
          roomCount = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
        }
        if (roomCount > 5) {
          return;
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };
    
      onMinuschildrenCount = () => {
        let { roomCount, adultCount, childrenCount } = this.state;
        childrenCount -= 1;
        if (childrenCount == -1) {
          return;
        }
        let totalPerson = adultCount + childrenCount;
        if (totalPerson < roomCount) {
          let diff = roomCount - totalPerson;
          roomCount -= diff;
        }
        this.setState({
          roomCount,
          adultCount,
          childrenCount
        });
      };

    render() {
        const { roomCount, adultCount, childrenCount } = this.state;
        return (
            <div >
                <table>
                    <tr>
                        <td>
                            <h1>Rooms</h1>
                        </td>
                        <td><span></span></td>
                        <td>
                            <div>
                                <button type="button" onClick={() => this.onMinusRoom()}>-</button>
                                <label>{roomCount}</label>
                                <button type="button" onClick={() => this.onPlusRoom()}>+</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Adults</h1>
                        </td>
                        <td><span></span></td>
                        <td>
                            <div>
                                <button type="button" onClick={() => this.onMimusAdult()}>-</button>
                                <label>{adultCount}</label>
                                <button type="button" onClick={() => this.onPlusAdult()}>+</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Childrens</h1>
                        </td>
                        <td><span></span></td>
                        <td>
                            <div>
                                <button type="button" onClick={() => this.onMinuschildrenCount()}>-</button>
                                <label>{childrenCount}</label>
                                <button type="button" onClick={() => this.onPluschildrenCount()}>+</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Main;