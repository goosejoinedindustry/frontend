import superagent from 'superagent';

export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';

export function getProfileData(props) {
  return {
    type    : GET_PROFILE_DATA,
    payload : new Promise((resolve, reject) => {
      superagent.get(`api/public/profile${props.accessPoint}`)
        .set({
          'Content-Type': 'application/json'
        }).end((profileErr, profileRes) => {
          if (profileErr) {
            reject(profileErr);
          } else {
            const profile = JSON.parse(profileRes.text);

            superagent.get(`api/people/photo${props.accessPoint}`)
            .set({
              'Content-Type': 'application/json'
            }).end((photosErr, photosRes) => {
              if (photosErr) {
                reject(photosErr);
              } else {
                resolve({
                  profile,
                  photos: JSON.parse(photosRes.text)
                });
              }
            });
          }
        });
    })
  };
}
