// homepage iframe:
let select = document.getElementById('select');

select.addEventListener('change', function(e){

  let value = select.value;
  let iframe = document.getElementById("iframe");

  if(value === 'Seatle'){
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.41616825273!2d-122.48214802452328!3d47.6129431826242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sjo!4v1618671772553!5m2!1sen!2sjo");

  }else if(value === 'Tokyo'){
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662980.6576979158!2d138.6485940352103!3d35.50405328554655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sjo!4v1618672494217!5m2!1sen!2sjo");

  }else if(value === 'Paris'){
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722657723!2d2.2770201358009565!3d48.85883773930155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sjo!4v1618674578430!5m2!1sen!2sjo");

  }else if(value === 'Dubai'){
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.1976005498!2d54.947552292403614!3d25.075085305564187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sjo!4v1618674652216!5m2!1sen!2sjo");

  }else{
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249743.7204473085!2d-77.12786646029976!3d-12.02660339931164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sjo!4v1618674703887!5m2!1sen!2sjo");
  }

});
