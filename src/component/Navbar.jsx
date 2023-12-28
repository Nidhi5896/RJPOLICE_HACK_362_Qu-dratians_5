import { AppBar , Box , Toolbar , Typography , Button } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function Navbar()
{
    return (
        <>
            <Box sx = {{flexgrow:1}}>
                <AppBar position = "static" color = "secondary" style={{ background: 'white',paddingTop:'10px',paddingBottom:'10px' }}>
                    <Toolbar>
                        <Typography variant = 'h5' component = "div" sx = {{flexGrow:1 , color : 'black'}}>
                            Cyber 
                            <br/>Platform
                        </Typography>
                        <div className="buttons" style={{display:'flex',
                        justifyContent:'space-around' , width:'60vw'}}>
                        <Button  component = {NavLink} to = "/" variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Home</Button>
                        <Button component = {NavLink} to = "/categories"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color: 'black',borderRadius:'20px'}}>Categories</Button>
                        <Button component = {NavLink} to = "/report"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Report</Button>
                        <Button component = {NavLink} to = "/contact"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color: 'black',borderRadius:'20px'}}>Contact</Button>
                        <Button component = {NavLink} to = "/blog"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Blog</Button>
                        <Button component = {NavLink} to = "/login"   variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>LogIn/Register</Button>                          
                        </div>
                    </Toolbar>   
                </AppBar>
            </Box>
        </>
    )
}