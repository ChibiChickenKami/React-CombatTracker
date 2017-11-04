// @flow
import React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

// Redux Actions
import { clearCombatRounds,nextCombatRound,setActions,nextAction } from '../../common/combatRounds/actions'

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const inlineStyles = {
  button: {
    margin: 12,
  },
  counter:{
    minHeight: 50 ,
    minWidth: 50,
    margin: 5,
    padding: '0px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  },
  CombatRoundPage:{
    display: 'flex',
  }
};

type CounterProps = {
  counter: number,
  title: string,
};

const Counter = ({counter,title}:CounterProps) => {

  return (
      <Paper
          style={inlineStyles.counter}
          zDepth={2}
          children={
            <div>
            <span>{title} {counter}</span>
            </div>}
      />
  );
};


class CombatRoundsPage extends React.Component {
  render() {
    const { combatRound, nextCombatRound,clearCombatRounds,setActions,nextAction } = this.props;
    const { currentCombatRound, currentAction, maxAction } = combatRound;
    return (
    <Paper style={inlineStyles.CombatRoundPage} zDepth={1}  children={
        <div style={inlineStyles.CombatRoundPage}>
          <Counter counter={currentCombatRound} title="Round"/>
          <Counter counter={currentAction} title="Action"/>
          <Counter counter={maxAction} title="Max Actions"/>
          <RaisedButton
              label="Next Action"
              primary={true}
              style={inlineStyles.button}
              onClick={()=>{nextAction()}}
          />
          <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem
                primaryText="Set Actions"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="4"
                            onClick={()=>{setActions(4)}}/>,
                  <MenuItem primaryText="5"
                            onClick={()=>{setActions(5)}}/>,
                  <MenuItem primaryText="6"
                            onClick={()=>{setActions(6)}}  />,
                ]}
            />
          <Divider/>
            <MenuItem
                primaryText="Next Round"
                onClick={()=>{nextCombatRound()}}
            />
            <MenuItem
                primaryText="Clear Combat"
                onClick={()=>{clearCombatRounds()}}
            />

          </IconMenu>
        </div>
    } />
    );
  }
}
export default compose(
    connect(
        (state) => ({
          combatRound: state.combatRound,
        }),
        { nextCombatRound,
          clearCombatRounds,
          setActions,
          nextAction,
        },
    ),
)(CombatRoundsPage);