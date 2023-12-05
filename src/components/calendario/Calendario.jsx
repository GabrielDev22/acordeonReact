
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro/MultiInputDateRangeField';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from "prop-types";
import "./Calendario.css";

const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
  });


function ProLabel({ children }) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included in Pro package">
          <a href="https://mui.com/x/introduction/licensing/#pro-plan">
            <ProSpan />
          </a>
        </Tooltip>
        <span>{children}</span>
      </Stack>
    );
  }

export const Calendario = () => {



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DateField', 'TimeField', 'DateTimeField', 'MultiInputDateRangeField', 'MultiInputTimeRangeField', 'MultiInputDateTimeRangeField']}>
            <DemoItem label="Date">
                <DateField defaultValue={dayjs('2023-11-28')} />
            </DemoItem>
            <DemoItem label="Time">
                <TimeField defaultValue={dayjs('2024-11-28T10:20')} />
            </DemoItem>
            <DemoItem>
                <DateTimeField defaultValue={dayjs('2023-11-28T10:20')} />
            </DemoItem>

            <DemoItem 
                label={<ProLabel>Date Range</ProLabel>} 
                component="MultiInputDateRangeField"
            > 
                <MultiInputDateRangeField defaultValue={[dayjs('2023-11-28'), dayjs('2023-11-28')]} />
            </DemoItem>

            <DemoItem 
                label={<ProLabel>Time Range</ProLabel>}
                component="MultiInputTimeRangeField"
            >
                <MultiInputTimeRangeField
                    defaultValue={[dayjs('2023-11-28')]}
                />
            </DemoItem>
            <DemoItem 
                label={<ProLabel>Date Time Range</ProLabel>}
                component="MultiInputDateTimeRangeField"
            >
                <MultiInputDateTimeRangeField 
                    defaultValue={[dayjs('2023-11-28T:10:20'), dayjs('2023-11-28T10:20')]}
                />
            </DemoItem>
           {/*  <DatePicker value={value} onChange={(newValue) => setValue(newValue)} /> */}
        </DemoContainer>
    </LocalizationProvider>
  )
}

ProLabel.propTypes = {
    children: PropTypes.node.isRequired,
  }
