const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPassword = 'dafsgnihnihnihni';
const myPassword1 = myPassword + 'y';

//1. 사용자 등록
bcrypt.genSalt(myPassword, saltRounds, function (error, salt) {
  console.log('Password Hash:', hash);
  bcrypt.hash(myPassword, saltRounds, function (error, hash) {
    console.log('Password Hash:', hash);

    // 사용자 등록시 hash값을 DB에 저장한다고 가정

    // 2. 사용자 로그인
    bcrypt.compare(myPassword, hash, function (error, result) {
      console.log('로그인 결과1: ', result);
    });
    bcrypt.compare(myPassword1, hash, function (error, result) {
      console.log('로그인 결과2: ', result);
    });
  });
});
