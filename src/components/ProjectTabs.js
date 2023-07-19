import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, background: '#161b25', color: 'gray' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `project-tab-${index}`,
    'aria-controls': `project-tabpanel-${index}`,
  };
}

export function ProjectTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#30363d' }}>
        <Tabs value={value} onChange={handleChange} aria-label="project tabs" sx={{ marginInline: 3 }}
          TabIndicatorProps={{ style: { background: '#30363d', color: '#30363d' } }}>
          <Tab label="About " {...a11yProps(0)} />
          <Tab label="Tools" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {props.about}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {props.tools}
      </CustomTabPanel>
    </Box>
  );
}