import React, { useContext, useState, useEffect, } from 'react'
import './Pricing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import Stack from '@mui/material/Stack';

import { Card, Divider, FormControlLabel, List, ListItem, Radio, RadioGroup, Slider } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { serviceValueData } from '../../data/serviceValueData';
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from 'react-reveal';

const teamList = [
  "Project Manager",
  "Mobile Development Architect",
  "UI/UX Architect"
]

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  },
  thumb: {
    background: "red",
    "&~&": {
      background: "green"
    }
  },
  mark: {
    background: "black"
  },
  rail: {
    background: "linear-gradient(to right, red, red 50%, green 50%, green);"
  },
  track: {
    background: "orange"
  },
  valueLabel: {
    "&>*": {
      background: "black"
    }
  }
}));

function Pricing() {

  useEffect(() => {
    getTotalCost();
  },);
  const classes = useStyles();
  const { theme } = useContext(ThemeContext)
  const [noOfPlatforms, setNoOfPlatforms] = useState(1);
  const [noOfDevsPerPlatform, setNoOfDevsPerPlatform] = useState(1);
  const [noOfMonths, setNoOfMonths] = useState(6);
  const [discount, setDiscount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [teamLocation, setTeamLocation] = useState('onShore');
  const [laborCost, setLaborCost] = useState(0);
  const [saving, setSaving] = useState(0);

  const workHoursInOneMonth = 173.333;
  const onShoreLaborCost = 100.00;
  const offShoreLaborCost = 80.00;

  const onChangeNoOfDevsPerPlatform = (event, value) => {
    setNoOfDevsPerPlatform(value);

    getTotalCost();
  };

  const onChangeNoOfPlatforms = (event, value) => {
    setNoOfPlatforms(value);

    getTotalCost();
  };

  const onChangeTeamLocation = (event, value) => {
    setTeamLocation(value);

    getTotalCost();
  };

  const getNoOfPlatformsTextValue = (value) => `${noOfPlatforms}`;

  const getNoOfDevsPerPlatformsTextValue = (value) => `${noOfDevsPerPlatform}`;


  const onChangeNoOfMonths = (event, value) => {
    if (value === 9) {
      setDiscount(5);
    } else if (value === 12) {
      setDiscount(10);
    } else {
      setDiscount(0)
    }
    setNoOfMonths(value);
    getTotalCost();
  };

  function currencyFormat(num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const getNoOfMonthsTextValue = (value) => `${noOfMonths}`;

  function getTotalCost() {

    if (teamLocation === "onShore") {
      setLaborCost(onShoreLaborCost);
    } else {
      setLaborCost(offShoreLaborCost);
    }

    const totalPrice = noOfMonths * workHoursInOneMonth * noOfDevsPerPlatform * (noOfPlatforms + 2) * laborCost;

    var discountedMoney = totalPrice * (discount / 100)
    // console.log(`total price: ${totalPrice}`)
    // console.log(`discount value: ${discount}%`)
    // console.log(`Money saved: ${discountedMoney}`)
    setSaving(discountedMoney)
    setTotalCost(totalPrice - discountedMoney);
  }

  if (window.location.origin.includes("localhost") === false) {
    return <div><h1>SORRY YOU DON'T HAVE AUTHORIZATION TO VIEW THIS PAGE 8-) </h1></div>
  } else {

    return (
      <div className="pricing" id="pricing" style={{ backgroundColor: theme.primary }}>

        <h1 style={{ color: theme.secondary }}>Pricing </h1>


        <div class="box">
          <Card raised style={{
            backgroundColor: theme.primary[80],
            padding: '30px',
            margin: '10px',
            minWidth: '350px',
            flex: 1,
          }}>



            <Stack direction="column" spacing={5}>


              <Stack direction="column" spacing={0}>
                <h3>Team Location</h3>

                <RadioGroup row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="onShore"
                  name="radio-buttons-group"
                  onChange={onChangeTeamLocation}
                >
                  <FormControlLabel value="onShore" control={<Radio />} label="On Shore" />
                  <FormControlLabel value="offShore" control={<Radio />} label="Off Shore" />
                </RadioGroup>

              </Stack>

              <Stack direction="column" spacing={2}>
                {`No. of Platforms Supported: ${noOfPlatforms}`}
                <Slider
                  classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                    valueLabel: classes.valueLabel,
                    mark: classes.mark
                  }}
                  style={{ width: 300 }}
                  min={1}
                  max={5}
                  step={1}
                  marks
                  value={noOfPlatforms}
                  valueLabelDisplay="auto"
                  getAriaValueText={getNoOfPlatformsTextValue}
                  onChange={onChangeNoOfPlatforms} />

              </Stack>


              <Stack direction="column" spacing={2}>
                {`No. of Devs for each platform: ${noOfDevsPerPlatform}`}
                <Slider
                  classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                    valueLabel: classes.valueLabel,
                    mark: classes.mark
                  }}
                  style={{ width: 300 }}
                  min={1}
                  max={5}
                  step={1}
                  marks
                  value={noOfDevsPerPlatform}
                  valueLabelDisplay="auto"
                  getAriaValueText={getNoOfDevsPerPlatformsTextValue}
                  onChange={onChangeNoOfDevsPerPlatform} />

              </Stack>


              <Stack direction="column" spacing={2}>
                {`Duration of contract :     ${noOfMonths}`}
                <Slider
                  classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                    valueLabel: classes.valueLabel,
                    mark: classes.mark
                  }}
                  style={{ width: 300 }}
                  min={6}
                  max={12}
                  step={3}
                  marks
                  value={noOfMonths}
                  valueLabelDisplay="auto"
                  getAriaValueText={getNoOfMonthsTextValue}
                  onChange={onChangeNoOfMonths} />

              </Stack>

              <Stack direction="column" spacing={2}>
                <h3>Team members included:</h3>
                <List>
                  {teamList.map(member => (

                    <ListItem>

                      <CheckCircle style={{ fontSize: 'large', color: 'green' }} />   <h5> {member}</h5>

                    </ListItem>))
                  }
                </List> </Stack>

              <Stack direction="column" spacing={2} justifyContent="end">

                <h3 style={{ textAlign: "end" }}>Monthly: {currencyFormat(totalCost / noOfMonths)}</h3>
                <Divider />
                <h3 style={{ textAlign: "end" }}>Total: {currencyFormat(totalCost)}</h3>
                <Divider />
                {saving > 0 &&

                  <h5 style={{ textAlign: "end", color: 'gray' }}>Saving: {currencyFormat(saving)} after %{discount} discount</h5>
                }
              </Stack>
            </Stack>
          </Card>

          <Card raised style={{
            backgroundColor: theme.primary[80],
            padding: '30px',
            minWidth: '500px',
            margin: '10px',
            flex: 2,
          }}>


            <Stack direction="column" spacing={1}>
              <h2>Services included:</h2>

              <List>
                {serviceValueData.regular.map(service => (
                  <Fade bottom>
                    <ListItem>
                      <CheckCircle style={{ fontSize: 'large', color: 'green' }} />    {service}
                    </ListItem>
                  </Fade>
                ))
                }
              </List>
            </Stack>
          </Card>

          <Card raised style={{
            backgroundColor: theme.primary[80],
            padding: '30px',
            minWidth: '500px',
            margin: '10px',
            flex: 2,
          }}>

            <Stack direction="column" spacing={1}>
              <h2>Bonus:</h2>

              <List>
                {serviceValueData.bonus.map(service => (
                  <Fade bottom>
                    <ListItem>
                      <CheckCircle style={{ fontSize: 'large', color: 'green' }} />    {service}
                    </ListItem>
                  </Fade>))
                }
              </List>
            </Stack>
          </Card>
        </div>

      </div >
    )
  }
}

export default Pricing