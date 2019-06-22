import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

class BallGridAnimation extends Component {
    constructor(props) {
        super(props);

        let emptyStartPos = { x: this.props.rows - 1, y: this.props.columns - 1 };
        const ballMatrix = this.initBallMatrix(
            this.props.rows,
            this.props.columns,
            emptyStartPos
        );

        this.state = {
            balls: ballMatrix,
            emptyPosition: emptyStartPos,
            lastPosition: undefined,
            intervalId: undefined,
        }
    }

    componentDidMount() {
        setTimeout(function () {
            var intervalId = setInterval(this.loopAnimation.bind(this), this.props.animationSpeed);
            this.setState({ intervalId: intervalId });
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <Wrapper size={this.props.size} sizeUnit={this.props.sizeUnit} onClick={this.handlePress.bind(this)}>
                {getBalls({
                    matrix: this.state.balls,
                    frontColor: this.props.frontColor,
                    size: this.props.size,
                    sizeUnit: this.props.sizeUnit,
                })}
            </Wrapper>
        );
    }

    initBallMatrix(rows, columns, emptyStartPos) {
        var matrix = [];
        var numberCounter = 0;

        for (let i = 0; i < columns; i++) {
            matrix.push([]);
            for (let j = 0; j < rows; j++) {
                matrix[i].push(numberCounter);
                numberCounter++;
            }
        }

        matrix[emptyStartPos.y][emptyStartPos.x] = 'empty';

        return matrix;
    }

    handlePress() {
        this.randomizeBalls();
    }

    loopAnimation() {
        this.moveSingleBall();
    }

    moveSingleBall() {
        var matrix = this.state.balls;
        let emptyPos = this.state.emptyPosition;
        let availableBalls = [];

        //  Check for available balls
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

        // Filter out the last position of the previous swap
        availableBalls = this.state.lastPosition
            ? availableBalls.filter(ball => ball.x !== this.state.lastPosition.x && ball.y !== this.state.lastPosition.y)
            : availableBalls;

        // Choose random target ball position
        let targetPos = availableBalls[this.getRandomInt(availableBalls.length)];

        //  Swap values
        let emptyValue = matrix[emptyPos.y][emptyPos.x];
        let targetValue = matrix[targetPos.y][targetPos.x];
        matrix[emptyPos.y][emptyPos.x] = targetValue;
        matrix[targetPos.y][targetPos.x] = emptyValue;

        this.setState({
            balls: matrix,
            lastPosition: emptyPos,
            emptyPosition: targetPos,
        });
    }

    randomizeBalls() {
        var numberStack = [];
        for (let i = 0; i < this.props.rows * this.props.columns; i++) {
            numberStack.push(i);
        }

        numberStack = this.shuffleArray(numberStack);

        var matrix = [];
        for (let i = 0; i < this.props.columns; i++) {
            matrix.push([]);
            for (let j = 0; j < this.props.rows; j++) {
                matrix[i].push(numberStack.pop());
            }
        }

        this.setState({
            balls: matrix
        });
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
};

const getBalls = ({ matrix, frontColor, size, sizeUnit }) => {
    var ballCount = matrix.length * matrix[0].length;
    var balls = [];
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            let keyValue = matrix[y][x];
            matrix[y][x] !== 'empty' && balls.push(
                <Ball
                    // Gradient colorize the balls if there are less than 9
                    frontColor={ballCount <= 9 ? 'rgba(0, 0, 0, ' + (1 - keyValue / 10) + ')' : frontColor}
                    size={size}
                    x={x * (size / 3 + size / 15)}
                    y={y * (size / 3 + size / 15)}
                    key={keyValue}
                    index={keyValue}
                    sizeUnit={sizeUnit}
                />,
            );
        }
    }

    // The order of the array items needs to stay consistent for rendering
    balls = balls.sort(function (a, b) {
        return a.props.index - b.props.index;
    });

    return balls;
};

export default BallGridAnimation;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
`;

const scaleUpAnim = props => keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const Ball = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 5}${props.sizeUnit}`};
    background-color: ${props => props.frontColor};
    border-radius: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .16), 0 0 2px rgba(0, 0, 0, .08);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) .3s;
    animation: ${scaleUpAnim} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
    animation-delay: ${props => props.index * 0.1}s;
`;

BallGridAnimation.defaultProps = {
    rows: 3,
    columns: 3,
    size: 40,
    frontColor: 'rgba(0, 0, 0, 1)',
    sizeUnit: 'px',
    animationSpeed: 500,
    animationDelay: 1000,
};

BallGridAnimation.propTypes = {
    rows: PropTypes.number,
    columns: PropTypes.number,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    sizeUnit: PropTypes.string,
    index: PropTypes.number,
    animationSpeed: PropTypes.number,
    animationDelay: PropTypes.number,
};
