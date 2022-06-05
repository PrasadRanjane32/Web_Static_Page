import React from 'react'
import className from './css/Profile.css'
import pic from './Image/R.jpg'
const Profile = () => {
  return (
    <div>
        <div className='shadow Lside'>
        <ul class="profile">
                    <li class="img">
                    <img src={pic}></img>
                    </li>
                    <li>
					<p>Good mornig, Flynn Rider!<br/>
					<a href="#">Settings</a>
					</p>
				</li>
			</ul>
		</div>
    </div>
  )
}

export default Profile