import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const MyUrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} className={classes.link}>
<<<<<<< HEAD
        {record[source]}
=======
        {record[source].substring(0, 50)}
>>>>>>> essay has been added an imgae property
        <LaunchIcon className={classes.icon} />
    </a>;

export default withStyles(styles)(MyUrlField);