function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;

    }
	  //Expiry Date
    var expiryDate = new Date(newValue);

    //Date to verify against
    var twelvemonthdate = new Date();
    var day = twelvemonthdate.getDate();	
    twelvemonthdate.setMonth(twelvemonthdate.getMonth() + 12); //add whatever timeframe required
    twelvemonthdate.setDate(day);

    if (expiryDate > twelvemonthdate) {
        g_form.showFieldMsg('expiry_date', 'You can only request a duration of up to 12 months maximum', 'error');
    }

}
