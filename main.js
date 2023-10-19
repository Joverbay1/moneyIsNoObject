// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
// ## 1. isAdmin 

const isAdmin = function(obj){
    return obj.userRole === 'ADMIN'
}



// ## 2. getEmail

// const getEmail = function(obj) {
//     let firstInitial = obj.firstName[0].toLowerCase()
//     let lowerCaseLastName = obj.lastName.toLowerCase()
//     return firstInitial + lowerCaseLastName + '.prsvr@gmail.com'
//   }

function getEmail(user) {
    const { firstName, lastName } = user;
    const email = `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}.prsvr@gmail.com`;
    return email;
  }


// ## 3. getPlaylistLength

const getPlaylistLength = function(playlist){
    return playlist.songs.length;
  }


  // ## 4. getHardestHomework (need help)

//   const getHardestHomework = function(arr){
//     let highestAverage = 0;
//     let highestHomework = '';
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i].averageScore > highestAverage){
//         highestAverage = arr[i].averageScore;
//         highestHomework = arr[i].name;
//       }
//       return highestHomework;
//     }
//       return '';
//     }

function getHardestHomework(homeworks) {
    if (homeworks.length === 0) {
      return '';
    }
  
    let hardestHomework = homeworks[0];
    for (let i = 1; i < homeworks.length; i++) {
      if (homeworks[i].averageScore < hardestHomework.averageScore) {
        hardestHomework = homeworks[i];
      }
    }
    
    return hardestHomework.name;
  }



    // ## 5. createPhonebook

    function createPhonebook(names, numbers) {
        const phonebook = {};
      for (let i = 0; i < names.length; i++) {
          const name = names[i];
          const number = numbers[i];
          phonebook[name] = number;
        }
      
        return phonebook;
      }
      


  


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};