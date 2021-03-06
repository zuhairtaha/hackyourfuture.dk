import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '1rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: { flexDirection: 'column' }
})

function SimpleExpansionPanel({ classes, item }) {
  const { summary, skills } = item
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>More...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails class={classes.details}>
          <h3>Summary:</h3>
          <Typography>{summary}</Typography>
          <h3>Skills:</h3>
          <Typography> {skills.join(', ')}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleExpansionPanel)
