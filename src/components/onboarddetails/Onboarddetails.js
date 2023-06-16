import React, { useEffect, useState } from 'react'
import Profileinputs from './Profileinputs';
import './styles/Onboard.scss';
import { getallsubscribeers } from '../../services/subscribe_services/subscribe_services';
import { ProfilUpdateOnboard } from '../../services/profileservices/profile-services';
import { toast } from 'react-toastify';
function Onboarddetails() {


    const [subscribes, setSubscribers] = useState([]);

    const [error, setErrror] = useState(false);

    useEffect(() => {
        getallsubscribeers().then((res) => {
            setSubscribers(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const [onboardsuer, setOnboarduser] = useState(
        {
            bankingdetails: "",
            contactno: "",
            altternateContactno: "",
            profiledescription: "",
            pincode: "",
            state: "",
            country: "",
            location: "",
            houseno: "",
            bankname: "",
            accountno: "",
            ifccode: "",
            branchname: "",
            subscribeName: "",
            streetaddress: ""
        }
    )

    const { username,
        email,
        password,
        role,
        approvalstatus,
        instagramurl,
        youtubeurl,
        bankingdetails,
        contactno,
        altternateContactno,
        profiledescription,
        pincode,
        state,
        country,
        location,
        houseno,
        bankname,
        accountno,
        ifccode,
        branchname,
        streetaddress,
        subscribeName
    } = onboardsuer;

    const handleChange = (e) => {
        setOnboarduser({ ...onboardsuer, [e.target.name]: e.target.value });
    }

    const SubmitUser = (e) => {
        e.preventDefault();
        if (
            contactno?.length === 0 ||
            altternateContactno?.length === 0 ||
            profiledescription?.length === 0 ||
            pincode?.length === 0 ||
            state?.length === 0 ||
            country?.length === 0 ||
            location?.length === 0 ||
            houseno?.length === 0 ||
            bankname?.length === 0 ||
            accountno?.length === 0 ||
            ifccode?.length === 0 ||
            branchname?.length === 0 ||
            streetaddress?.length === 0
        ) {

            setErrror(true);
        }
        if (
            contactno &&
            altternateContactno &&
            profiledescription &&
            pincode &&
            state &&
            country &&
            location &&
            houseno &&
            bankname &&
            accountno &&
            ifccode &&
            branchname &&
            streetaddress
        ) {


            const ids = localStorage.getItem("id");

            const datas = {
                contactno: contactno,
                altternateContactno: altternateContactno,
                profiledescription: profiledescription,
                pincode: pincode,
                state: state,
                country: country,
                location: location,
                houseno: houseno,
                bankname: bankname,
                accountno: accountno,
                ifccode: ifccode,
                branchname: branchname,
                streetaddress: streetaddress,
                userId: JSON.parse(ids),
                subscribeName: "Free"
            }

            console.log(datas,"datas")
            // ProfilUpdateOnboard(datas).then((res) => {
            //     toast.success("Success ONbOARD")
            // }).catch((err) => {
            //     toast.error("error onboard")
            // })
        }
    }


    return (
        <div className='onboardsection'>
            <div className='insidesectiononbaord'>
                <Profileinputs
                    handleChange={handleChange}
                    onboardsuer={onboardsuer}
                    SubmitUser={SubmitUser}
                    subscribes={subscribes}
                    error={error}
                />
            </div>

        </div>
    )
}

export default Onboarddetails