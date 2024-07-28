import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Stack, IconButton, Divider } from '@chakra-ui/react'
// import { Avatar, AvatarBadge } from '@chakra-ui/react'
import Avatar from 'react-avatar';
import { Button, Heading, Menu, MenuButton, MenuItem, MenuList, Progress} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import '../styles/treatment.css';
import { color, wrap } from 'framer-motion';




const Treatment = () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const name = `${firstName} ${lastName}`;

    const age = 25;
    const bloodType = 'O+';
    const birthDate = '01/01/1996';

    const weight = 150;
    const height = 5.8;
    const bloodPressure = '120/80';
    const heartRate = 75;
    const temperature = 98.6;
    const respiratoryRate = 12;
    const oxygenSaturation = 98;
    const BMI = 19.3;

    const bloodSugarLevel = 120;
    const cholesterolLevel = 200;

    const currentConditions = ['Cancer', 'Diabetes', 'Hypertension'];
    const pastConditions = ['Chicken Pox', 'Mumps', 'Measles'];
    const sex = 'F';
    const currentMedications = ['Insulin', 'Ventolin', 'Metformin'];
    const allergies = ['Peanuts', 'Shellfish', 'Dust Mites'];
    const symptoms = ['Shortness of Breath', 'Coughing', 'Fatigue'];
    const familyHistory = ['Diabetes', 'Hypertension', 'Cancer'];
    const pastSurgeries = ['Appendectomy', 'Tonsillectomy', 'Hernia Repair'];


    const highProteinFoods = ['bakedChicken', 'grilledSalmon', 'steamedBroccoli', 'GreekYogurt', 'proteinShake'];
    const foodToAvoid = ['sugaryDrinks', 'processedFoods', 'friedFoods', 'whiteBread', 'whiteRice', 'pastries']; 

    const mostRecentSurgery = 'Appendectomy';
    const mRS_date = '01/01/2021';

    const [severity, setSeverity] = useState('Mild');
    const [bmiState, setBmiState] = useState('Normal');

    const handleBmiChange = (newBmi) => {
      if (newBmi < 18.5){
        setBmiState('Underweight');
      } else if (newBmi >= 18.5 && newBmi < 24.9){
        setBmiState('Normal');
      } else if (newBmi >= 25 && newBmi < 29.9){  
        setBmiState('Overweight');
      }
      else if (newBmi >= 30){
        setBmiState('Obese');
      }
    };

    useEffect(() => {
      handleBmiChange(BMI);
    }, [BMI]);

    const handleSeverityChange = (newSeverity) =>{
      setSeverity(newSeverity);
    }

    return (
      <div className ='fullpage' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyItems: 'center'}}>

        {/* patient card */}

        <div className='treatment-card' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: 'auto', paddingBottom: '20px'}}>
          <Heading as="h1" size="2xl" style={{margin: '20px 0px 0px 0px', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Patient Information</Heading>
          <hr style={{borderColor: '#605c5c', width: '20vw', marginBottom: '30px'}} />
          <Card direction={{base: 'column', sm: 'row'}}
                variant={'outline'}
                w = {'90vw'}
                h = {'auto'}
                border={'1px solid #ccc'}
                borderRadius={'20px'}
                boxShadow={'0 4px 8px rgba(0, 0, 0, 0.3)'}
                justifyContent={'center'}
                alignItems={'center'}
                backgroundColor={'white'}>
                  <div className='avatar' style={{width:'25vw', paddingTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Avatar name={name} 
                              round= '70px'
                              color='#70C0F9'
                              size='200px'/>

                    <h2>{name}</h2>
                  </div>

                  <div className='basic-info' style={{width: '30vw', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      {/* <div>
                        <h2>Patient's Information</h2>
                      </div> */}
                      <div className='F-NAME' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '15vw'}}> 
                        <h4>First Name:</h4>
                        <p>{firstName}</p> 
                      </div>

                      <div className='L-NAME' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '15vw'}}>
                        <h4>Last Name:</h4>
                        <p>{lastName}</p>
                      </div>

                      <div className='AGE' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '8vw'}}>
                        <h4>Age:</h4>
                        <p>{age}</p>
                      </div>

                      <div className='BLOOD-TYPE' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '15vw'}}>
                        <h4>Blood Type:</h4>
                        <p>{bloodType}</p>
                      </div>

                      <div className='SEX' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '7.5vw'}}>
                        <h4>Sex: </h4>
                        <p>{sex}</p>
                      </div>

                      <div className='BIRTHDATE' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '15vw'}}>
                        <h4>Birthdate:</h4>
                        <p>{birthDate}</p>
                      </div>

                      {/* <h4 size="md">First Name: </h4>
                      <h4 size="md">Last Name: {lastName}</h4>
                      <p>Age: {age}</p>
                      <p>Blood Type: {bloodType}</p>
                      <p>Sex: {sex}</p>
                      <p>Birthdate: {birthDate}</p> */}

                  </div>

                  <div className='condition-info' style={{width: '35vw', height: '100%', padding: '15px 0px 15px 0px'}}>
                    <div>
                      <h4>Current Medical Condition: </h4>
                      <p>{currentConditions.join(', ')}</p>
                    </div>

                    <div>
                      <h4>Allergies: </h4>
                      <p>{allergies.join(', ')}</p>
                    </div>
                    
                    <div>
                      <h4>Family History: </h4>
                      <p> {familyHistory.join(', ')}</p>
                    </div>
                    
                    <div>
                      <h4>Current Medications: </h4>
                      <p> {currentMedications.join(', ')}</p>
                    </div>

                    </div>  
          </Card>
        </div>

        {/* condition information card */}
        <hr style={{width: '80vw'}} />

        <div className='condition-section' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div className='condition-card' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '55vw'}}>
            <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Condition Information</Heading>

            <div className='condition-info'>
              <div className='current-condition-info'>
                <p><strong>Diagnosed Conditions: </strong>{currentConditions.join(', ')}</p>
                <p><strong>Symptoms: </strong>{symptoms.join(', ')}</p>
                <div className='severity-section' style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}> 
                  <p><strong>Severity: </strong>{severity}</p>
                  <Menu isLazy>
                      <MenuButton as={IconButton} backgroundColor={'#70C0F9'} borderColor={'#fff'} color={'#fff'}  w='4vw' h='5vh' borderRadius='20px' icon={<EditIcon />}>Open menu</MenuButton>
                      <MenuList w='15vw' h='27vh'>
                        {/* MenuItems are not rendered unless Menu is open */}
                        <MenuItem h='8vh' fontSize={'1.3rem'} fontFamily={'poppins'} borderColor={'0px #fff'} textAlign={'center'} onClick={() => handleSeverityChange('Mild')}>Mild</MenuItem>
                        <MenuItem h='8vh' fontSize={'1.3rem'} fontFamily={'poppins'} onClick={() => handleSeverityChange('Moderate')}>Moderate</MenuItem>
                        <MenuItem h= '8vh'fontSize={'1.3rem'} fontFamily={'poppins'}  onClick={() => handleSeverityChange('Severe')}>Severe</MenuItem>
                      </MenuList>
                    </Menu>
                </div>
              
              </div>

              <div className='past-condition-info'>
                <p><strong>Past Conditions: </strong>{pastConditions.join(', ')}</p>
                <p><strong>Past Surgeries: </strong>{pastSurgeries.join(', ')}</p>
                <p><strong>Most Recent Surgery: </strong>{mostRecentSurgery} - {mRS_date}</p>

              </div>

            </div>
      
          </div>

          <div className='health-metrics-info' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: 'auto'}}>
              <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Health Metrics</Heading>

              <div className='metrics-info' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className='vitals'>
                <p><strong>Weight: </strong>{weight}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Blood Pressure: </strong>{bloodPressure}</p>
                <p><strong>Heart Rate: </strong>{heartRate}</p>
                <p><strong>Temperature: </strong>{temperature}</p>
                </div>

                <div className='vitals'>
                <p><strong>Respiratory Rate: </strong>{respiratoryRate}</p>
                <p><strong>Oxygen Saturation: </strong>{oxygenSaturation}</p>
                <p><strong>BMI: </strong>{BMI} - {bmiState}</p>
                <p><strong>Blood Sugar Level: </strong>{bloodSugarLevel}</p>
                <p><strong>Cholesterol Level: </strong>{cholesterolLevel}</p>
                </div>
                    
              </div>
          </div>
        </div>

        <hr style={{width: '80vw'}} />
        
        {/* past treatments */}
        <div className='immunization records' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
          <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Immunization Records</Heading>

          <div className='immunization-info' style={{width: '80vw'}}>
          <TableContainer>
              <Table w= '80vw' h='30vh'>
                <Thead>
                  <Tr textAlign={'center'}>
                    <Th>Vaccines Administered</Th>
                    <Th>Dates Administered</Th>
                    <Th>Completed? </Th>
                    <Th>Upcoming Vaccine Appointments</Th>
                  </Tr>
                </Thead>
                <Tbody textAlign={'center'}>
                  <Tr>
                    <Td>Flu Shot</Td>
                    <Td>12/10/21 ------ 26/10/21</Td>
                    <Td>Yes</Td>
                    <Td>Nil</Td>
                  </Tr>
                  <Tr>
                    <Td>COVID-19 Vaccine</Td>
                    <Td>10/01/21 ------ 24/03/21</Td>
                    <Td>Yes</Td>
                    <Td>Nil</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>01/07/22 ------ 27/12/22</Td>
                    <Td>No</Td>
                    <Td>03/03/23</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            {/* <div className='immunization-card' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '50vw'}}>
              <div className='immunization-info'>
                <p><strong>Immunization 1: </strong>Flu Shot - 01/01/2021</p>
                <p><strong>Immunization 2: </strong>COVID-19 Vaccine - 02/01/2021</p>
                <p><strong>Immunization 3: </strong>TDAP - 03/01/2021</p>
              </div>
            </div> */}
          </div>

        </div>

      
       

      <div className='treatment-card'>

            <Heading as="h1" size="2xl" style={{margin: '20px', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'left', borderBottom: '1px solid #000'}}>Treatment Plan</Heading>
            
            {/* Medical Health Section */}
            <div className='medical-health-section' style={{display:'flex', flexDirection: 'column'}}>
              {/* Medications section */}
              
              <div className='medication'>
                <Heading as="h2" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'left'}}>Medications</Heading>
                <div class="medication" style={{display:'flex', flexDirection: 'row'}}>
                    <div class="med1-details">
                        <p><strong><i class="fas fa-pills icon"></i> Name:</strong> Metformin</p>
                        <p><strong>Dosage:</strong> 500mg</p>
                        <p><strong>Frequency:</strong> Twice daily</p>
                        <p><strong>Purpose:</strong> Blood Sugar Control</p>
                    </div>
                    <hr className='vertical_hr'></hr>

                    <div class="med2-details">
                        <p><strong><i class="fa-solid fa-tablets"></i> Name:</strong> Lisinopril</p>
                        <p><strong>Dosage:</strong> 10mg</p>
                        <p><strong>Frequency:</strong> Once daily</p>
                        <p><strong>Purpose:</strong> Blood Pressure Control</p>
                    </div>

                    <hr className='vertical_hr'></hr>

                    <div class="med3-details">
                        <p><strong><i class="fa-solid fa-prescription-bottle-medical"></i> Name:</strong> Amoxicillin</p>
                        <p><strong>Dosage:</strong> 500mg</p>
                        <p><strong>Frequency:</strong> Twice daily</p>
                        <p><strong>Purpose:</strong> Bacteria Infection (Appendectomy)</p>
                    </div>
                </div>
              </div>

              <div className='doctors' style={{textAlign: 'right'}}>
                <h3>Prescribing Doctor Information</h3>
                <p><strong><i class="fa fa-user-md"></i> Doctor Name:</strong> Dr. Smith</p>
                <p><strong>Contact Information:</strong> (123) 456-7890, drsmith@example.com</p>
                
                <h3>Pharmacy Information</h3>
                <p><strong><i class="fa-solid fa-prescription"></i> Pharmacy Name:</strong> Health Pharmacy</p>
                <p><strong>Contact Information:</strong> (987) 654-3210, pharmacy@example.com</p>
              </div>

              <hr style={{width: '80vw', marginTop: '30px'}}></hr>
                

              {/* Surgery Section */}

              <div className='divided' style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                  <div className='surgery' style={{display:'flex', flexDirection:'column'}}>
                    <Heading as="h2" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'left'}}>Surgeries</Heading>
                    <div class="surgery" style={{display:'flex', flexDirection: 'column'}}>
                        <div class="surg1-details">
                            <p><strong><i class="fas fa-syringe icon"></i> Name:</strong> Pancreatic Tumour Resection</p>
                            <p><strong><i class="fa-solid fa-calendar-days"></i> Date:</strong> August 31st, 2022</p>
                            <p><strong><i class="fa fa-user-md"></i> Surgeon:</strong> Dr. Jane Doe</p>
                            <p><strong><i class="fa-regular fa-hospital"></i> Hospital:</strong> Alberta's Children Hospital</p>
                            <p><strong><i class="fa-regular fa-clock"></i> Recovery Time & Hospice Care: </strong> 2 weeks</p>
                        </div>
                        <hr className='horizontal_hr'></hr>

                        <div class="surg2-details">
                            <p><strong><i class="fas fa-syringe icon"></i> Name:</strong> Diabetic Foot Ulcer Debridement</p>
                            <p><strong><i class="fa-solid fa-calendar-days"></i> Date:</strong> December 12th, 2022</p>
                            <p><strong><i class="fa fa-user-md"></i> Surgeon:</strong> Dr. Joe Peter</p>
                            <p><strong><i class="fa-regular fa-hospital"></i> Hospital:</strong> Alberta's Children Hospital</p>
                            <p><strong><i class="fa-regular fa-clock"></i> Recovery Time & Hospice Care: </strong> 6 weeks</p>
                        </div>

                        <div className='add-surgery-button' style={{display:'flex', justifyContent:'center'}}>
                          <Button colorScheme="blue" style={{margin: '10px', backgroundColor: '#70C0F9', border: "0px", color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '30px', margin: '10px', padding: '20px, 40px', fontSize: '1.2rem', height: 'auto'}}>ADD SURGERY</Button>
                        </div>

                        <div className='check-schedule-button' style={{display:'flex', justifyContent:'center'}}>
                          <Button colorScheme="blue" style={{margin: '10px', backgroundColor: '#70C0F9', border: "0px", color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '30px', margin: '10px', padding: '20px, 40px', fontSize: '1.2rem', height: 'auto'}}>CHECK SCHEDULE</Button>
                        </div>
                      
                        {/* <hr className='vertical_hr'></hr>

                        <div class="surg3-details">
                            <p><strong><i class="fas fa-syringe icon"></i> Name:</strong> Amoxicillin</p>
                            <p><strong>Dosage:</strong> 500mg</p>
                            <p><strong>Frequency:</strong> Twice daily</p>
                            <p><strong>Purpose:</strong> Alberta's Children Hospital</p>
                        </div> */}
                  </div>
                </div>
              <hr className='vertical_hr' style={{height: '100vh', backgroundColor: '#fff', border: '0px'}}></hr>

              <div className='nutrition' style={{width: '40vw'}}>
                      <Heading as="h2" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Nutrition & Meal Prep</Heading>
                      
                          <div class="nutri-details" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <i className="fa-solid fa-bowl-food m-icon"></i>
                            <div>
                            <p><strong> Meal Plan:</strong> High-Protein Diet</p>
                              <p><strong>Start Date:</strong> 10th July 2023</p>
                              <p><strong>Goal:</strong> Muscle Development and Strengthening</p>
                              <p><strong>Foods Suggested: </strong>{highProteinFoods. join(', ')}</p>
                              <p><strong>Foods to Avoid: </strong>{foodToAvoid.join(', ')}</p>
                            </div>
                              
                          </div>
                          
                          <div class="file-attachment" style={{textAlign: 'center', margin: '10px' }} >
                            <a href="path/to/low-carb-meal-plan.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Meal Plan</a>
                          </div>

                          <div className='doctors' style={{textAlign: 'center', border: '0.5px solid #000', borderRadius: '30px'}}>
                          <h3>Nutritionist Information</h3>
                          <p><strong>Nutritionist Name:</strong> Dr. Gren</p>
                          <p><strong>Contact Information:</strong> (123)456-7890, drgreendoe@shaw.ca</p>
                        
                          </div>
              </div>
              
              </div>
            </div>

            <hr style={{width: '80vw', marginTop: '30px'}}></hr>

            {/* Mental Therapy Section */}
            <div className='therapy-section' style={{display:'flex', flexDirection: 'column'}}>
              <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Therapy: Physio-Therapy & Mental Therapy</Heading>

              <div className='therapy-info' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                <div className='physio-therapy' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
                
                  <Heading as="h3" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Physio-Therapy</Heading>

                   <i class="fas fa-dumbbell icon m-icon"></i>
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  
                    <p><strong>Exercise: </strong> Knee-Strenghtening</p>
                    <p><strong>Start Date: </strong> 12/12/23</p>
                    <p><strong>Location: </strong> Alberta's Children Hospital</p>
                    <p><strong>Frequency: </strong> 3 times a week</p>
                    <p><strong>Duration: </strong> 1 hour</p>
                  </div>

                  <div class="file-attachment">
                            <a href="path/to/knee-strengthening-exercise.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Exercise Details</a>
                            </div>
                </div>

                <div className='physio-therapy' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
                  <Heading as="h3" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Physio-Therapy</Heading>
                   <i class="fas fa-dumbbell icon m-icon"></i>
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <p><strong>Exercise: </strong> Back Straightening</p>
                    <p><strong>Start Date: </strong> 12/12/23</p>
                    <p><strong>Location: </strong> Alberta's Children Hospital</p>
                    <p><strong>Frequency: </strong> 3 times a week</p>
                    <p><strong>Duration: </strong> 1 hour</p>
                    
                  </div>

                  <div class="file-attachment">
                            <a href="path/to/knee-strengthening-exercise.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Exercise Details</a>
                            </div>
                </div>

                <div className='mental-therapy' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
                  <Heading as="h3" size="l" style={{margin: '10px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Mental-Therapy</Heading>
                   <i class="fa-solid fa-brain icon m-icon"></i>
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <p><strong>Therapy Type:</strong> Cognitive Behavioral Therapy (CBT)</p>
                    <p><strong>Start Date: </strong> 12/12/23</p>
                    <p><strong>Location: </strong> Alberta's Children Hospital</p>
                    <p><strong>Frequency: </strong> 2 times a week</p>
                    <p><strong>Duration: </strong> 1.5 hours</p>
                  </div>
                  <div class="file-attachment">
                    <a href="path/to/cbt-plan.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Therapy Plan</a>
                  </div>
                </div>
              </div>
              <div className='add-surgery-button' style={{display:'flex', justifyContent:'center'}}>
                          <Button colorScheme="blue" style={{margin: '10px', backgroundColor: '#70C0F9', border: "0px", color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '30px', margin: '10px', padding: '20px, 40px', fontSize: '1.2rem', height: 'auto'}}>ADD THERAPY</Button>
                        </div>

                        <div className='check-schedule-button' style={{display:'flex', justifyContent:'center'}}>
                          <Button colorScheme="blue" style={{margin: '10px', backgroundColor: '#70C0F9', border: "0px", color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '30px', margin: '10px', padding: '20px, 40px', fontSize: '1.2rem', height: 'auto'}}>CHECK SCHEDULE</Button>
                        </div>
            </div>

            <hr style={{width: '80vw'}}></hr>






                  

               {/* Nutrition Section */}
               <div>

                  </div>

                  {/* Lab Results */}
                  <div></div>

                  {/* Doctors Information*/}
                  <div></div>

                  {/*Insurance */}

                  <div></div>
                              
              </div>

      <div className='other information'>
        <Heading as="h1" size="2xl" style={{margin: '20px', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'left', borderBottom: '1px solid #000'}}> Other Relevant Information</Heading>

        <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Lab Results</Heading>
        
        <div className='labtests' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', width: '100%', padding: '20px'}}>



          <div class="lab-result" >
                  <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                  </div>
                  <div>
                  <div class="testdetails1">
                      <p><strong>Test:</strong> Urinalysis</p>
                      <p><strong>Date:</strong> July 18, 2024</p>
                  </div>
                  <div class="file-attachment">
                      <a href="path/to/urinalysis-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Urinalysis Results</a>
                  </div>
                  </div>
          </div>

          <div class="lab-result" >
                <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                </div>
                <div>
                <div class="testdetails2">
                    <p><strong>Test:</strong> Blood Test</p>
                    <p><strong>Date:</strong> July 20, 2024</p>
                </div>
                <div class="file-attachment">
                    <a href="path/to/blood-test-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Blood Test Results</a>
                </div>
           </div>
           </div>
          

          <div class="lab-result" >
                <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                </div>
                <div>
                <div class="testdetails3">
                    <p><strong>Test:</strong> ECG</p>
                    <p><strong>Date:</strong> July 25, 2024</p>
                </div>
                <div class="file-attachment">
                    <a href="path/to/ecg-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View ECG Results</a>
                </div>
            </div>
            </div>

            <div class="lab-result" >
                <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                </div>
                <div>
                <div class="testdetails4">
                    <p><strong>Test:</strong> Chest X-Ray</p>
                    <p><strong>Date:</strong> June 30, 2024</p>
                </div>
                <div class="file-attachment">
                    <a href="path/to/chest-xray-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Chest X-Ray</a>
                </div>
            </div>
            </div>

            <div class="lab-result" >
                <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                </div>
                <div>
                <div class="testdetails5">
                    <p><strong>Test:</strong> MRI Scan</p>
                    <p><strong>Date:</strong> June 30, 2024</p>
                </div>
                <div class="file-attachment">
                    <a href="path/to/mri-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View MRI Scan</a>
                </div>
              </div>
              </div>


            <div class="lab-result" >
                <div className='icon'>
                  <i class="fas fa-file-medical-alt icon m-icon"></i>
                </div>
                <div>
                  <div class="testdetails5">
                      <p><strong>Test:</strong> MRI Scan</p>
                      <p><strong>Date:</strong> June 27, 2024</p>
                  </div>
              <div class="file-attachment">
                  <a href="path/to/biopsy-result.pdf" target="_blank"><i class="fas fa-file-pdf"></i> View Biopsy Report</a>
              </div>
              </div>
            </div>

        </div>
        <div className='add-surgery-button' style={{display:'flex', justifyContent:'center'}}>
                          <Button colorScheme="blue" style={{margin: '10px', backgroundColor: '#70C0F9', border: "0px", color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '30px', margin: '10px', padding: '20px, 40px', fontSize: '1.2rem', height: 'auto'}}>ADD LAB RESULTS</Button>
                        </div>

        

        <hr style={{width: '80vw'}}></hr>

        <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Insurance Information</Heading>
        <div className='insurance-info' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px'}}>
          <div className='insurance-details' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
            <i class="fas fa-file-invoice-dollar icon m-icon"></i>
            <div>
              <p><strong>Insurance Provider:</strong> Blue Cross</p>
              <p><strong>Policy Number:</strong> 123456789</p>
              <p><strong>Policy Type:</strong> Health Insurance</p>
              <p><strong>Start Date:</strong> 01/01/2022</p>
              <p><strong>End Date:</strong> 01/01/2023</p>
            </div>
          </div>

          <div className='insurance-details' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
            <i class="fas fa-file-invoice-dollar icon m-icon"></i>
            <div>
              <p><strong>Insurance Provider:</strong> Sun Life</p>
              <p><strong>Policy Number:</strong> 987654321</p>
              <p><strong>Policy Type:</strong> Dental Insurance</p>
              <p><strong>Start Date:</strong> 01/01/2022</p>
              <p><strong>End Date:</strong> 01/01/2023</p>
            </div>
          </div>

          </div>


        <Heading as="h2" size="l" style={{margin: '20px', color: '#70C0F9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: 'center'}}>Emergency Contact Information</Heading>

        <div className='emergency-info' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px'}}>
          <div className='emergency-details' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
            <i class="fas fa-user-friends icon m-icon"></i>
            <div>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Relationship:</strong> Father</p>
              <p><strong>Contact Number:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> joedoe@html.com</p>
              </div>


          </div>
          <div className='emergency-details' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
            <i class="fas fa-user-friends icon m-icon"></i>
            <div>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Relationship:</strong> Father</p>
              <p><strong>Contact Number:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> joedoe@html.com</p>
              </div>
            </div>

              <div className='emergency-details' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
            <i class="fas fa-user-friends icon m-icon"></i>
            <div>
              <p><strong>Name:</strong> Emergency Number</p>
              <p><strong>Contact Number:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> joedoe@html.com</p>
              </div>

            </div>

            </div>




          

          


      </div>
         
    </div>

    );
  }
  
  export default Treatment;
  