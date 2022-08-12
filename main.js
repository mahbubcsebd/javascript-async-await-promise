const hasMeeting = false;

// Prothome Promise create korte hobe. promise parameter hisabe 2ti function ney
// 1. resolve
// 2. reject
// jodi promise er vitorer condition true hoy tahole resolve function call hobe r false hole reject function call hobe.
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: "Techniqal Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        resolve(meetingDetails);
    } else {
        reject(new error("meeting already scheduled"));
    }
});

// Promise (meeting) ke call korar jonno:
meeting.then((res) => {
        console.log(JSON.stringify(res));
    });
meeting.catch((err) => {
        console.log(err.message);
    });