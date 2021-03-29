import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const buildBallGrid = ({ matrix, color, size, sizeUnit }) => {
  const ballCount = matrix.length * matrix[0].length;
  let ballGrid = [];
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[0].length; x += 1) {
      const keyValue = matrix[y][x];

      if (matrix[y][x] !== "empty") {
        ballGrid.push(
          <Ball
            // Gradient colorize the balls if there are less than 9
            color={
              ballCount <= 9 ? `rgba(0, 0, 0, ${1 - keyValue / 10})` : color
            }
            size={size}
            x={x * (size / 3 + size / 15)}
            y={y * (size / 3 + size / 15)}
            key={keyValue}
            index={keyValue}
            sizeUnit={sizeUnit}
          />
        );
      }
    }
  }

  // The order of the array items needs to stay consistent for rendering and animating
  ballGrid = ballGrid.sort((a, b) => a.props.index - b.props.index);
  return ballGrid;
};

class BallGridAnimation extends Component {
  constructor(props) {
    super(props);

    const ballMatrix = this.initBallMatrix(
      this.props.rows,
      this.props.columns,
      this.props.emptyStartPosition
    );

    this.state = {
      balls: ballMatrix,
      emptyPosition: this.props.emptyStartPosition,
      lastEmptyPosition: undefined,
      intervalId: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const intervalId = setInterval(
        this.moveSingleBall.bind(this),
        this.props.animationSpeed
      );
      this.setState({ intervalId });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  randomizeBalls = () => {
    let numberStack = [];
    for (let i = 0; i < this.props.rows * this.props.columns; i += 1) {
      numberStack.push(i);
    }

    numberStack = this.shuffleArray(numberStack);

    const matrix = [];
    for (let i = 0; i < this.props.columns; i += 1) {
      matrix.push([]);
      for (let j = 0; j < this.props.rows; j += 1) {
        matrix[i].push(numberStack.pop());
      }
    }

    this.setState({
      balls: matrix,
    });
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      /* eslint-disable no-param-reassign */
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      /* eslint-enable  no-param-reassign */
    }
    return array;
  };

  initBallMatrix = (rows, columns, emptyStartPos) => {
    const matrix = [];
    let numberCounter = 0;

    for (let i = 0; i < columns; i += 1) {
      matrix.push([]);
      for (let j = 0; j < rows; j += 1) {
        matrix[i].push(numberCounter);
        numberCounter += 1;
      }
    }

    matrix[emptyStartPos.y][emptyStartPos.x] = "empty";

    return matrix;
  };

  moveSingleBall = () => {
    /* eslint-disable react/no-access-state-in-setstate */
    const matrix = this.state.balls;
    const emptyPos = this.state.emptyPosition;
    /* eslint-enable react/no-access-state-in-setstate */
    let availableBalls = [];

    //  Check for available balls around empty position
    if (matrix[emptyPos.y - 1] !== undefined) {
      availableBalls.push({ x: emptyPos.x, y: emptyPos.y - 1 });
    }
    if (matrix[emptyPos.y + 1] !== undefined) {
      availableBalls.push({ x: emptyPos.x, y: emptyPos.y + 1 });
    }
    if (matrix[emptyPos.y][emptyPos.x - 1] !== undefined) {
      availableBalls.push({ x: emptyPos.x - 1, y: emptyPos.y });
    }
    if (matrix[emptyPos.y][emptyPos.x + 1] !== undefined) {
      availableBalls.push({ x: emptyPos.x + 1, y: emptyPos.y });
    }

    // Filter out the last position of the previous swap (no moving to last position)
    availableBalls = this.state.lastEmptyPosition
      ? availableBalls.filter(
          (ball) =>
            ball.x !== this.state.lastEmptyPosition.x &&
            ball.y !== this.state.lastEmptyPosition.y
        )
      : availableBalls;

    // Choose random target ball to move to empty position
    const targetPos = availableBalls[this.getRandomInt(availableBalls.length)];

    //  Swap values of target ball and empty position
    const emptyValue = matrix[emptyPos.y][emptyPos.x];
    const targetValue = matrix[targetPos.y][targetPos.x];
    matrix[emptyPos.y][emptyPos.x] = targetValue;
    matrix[targetPos.y][targetPos.x] = emptyValue;

    // Set state to animate change
    this.setState({
      balls: matrix,
      lastEmptyPosition: emptyPos,
      emptyPosition: targetPos,
    });
  };

  getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  render() {
    return (
      <Wrapper
        size={this.props.size}
        sizeUnit={this.props.sizeUnit}
        onClick={this.randomizeBalls}
      >
        {buildBallGrid({
          matrix: this.state.balls,
          color: this.props.color,
          size: this.props.size,
          sizeUnit: this.props.sizeUnit,
        })}
      </Wrapper>
    );
  }
}

export default BallGridAnimation;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.size}${props.sizeUnit}`};
  height: ${(props) => `${props.size}${props.sizeUnit}`};
`;

const scaleUpAnim = () => keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const Ball = styled.div`
  position: absolute;
  top: ${(props) => `${props.y}${props.sizeUnit}`};
  left: ${(props) => `${props.x}${props.sizeUnit}`};
  width: ${(props) => `${props.size / 5}${props.sizeUnit}`};
  height: ${(props) => `${props.size / 5}${props.sizeUnit}`};
  background-color: ${(props) => props.color};
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0, 0, 0, 0.08);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  animation: ${scaleUpAnim} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    backwards;
  animation-delay: ${(props) => props.index * 0.1}s;
`;

BallGridAnimation.defaultProps = {
  rows: 3,
  columns: 3,
  size: 40,
  color: "rgba(0, 0, 0, 1)",
  sizeUnit: "px",
  animationSpeed: 500,
};

BallGridAnimation.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
  animationSpeed: PropTypes.number,
};
