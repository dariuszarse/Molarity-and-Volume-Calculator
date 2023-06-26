function get_available_solutions() {
        get_available_solution1();
        get_available_solution2();
        get_available_solution3();
        get_available_solution4();
        get_available_solution5();
}

function get_available_solution1() {
        solution1 = document.getElementById("solution1").value;
        solution1_unit = document.getElementById("solution1_unit").value;
        if (solution1_unit==1) {
                solution1_converted = solution1*1000000;
        } else if (solution1_unit==2) {
                solution1_converted = solution1*1000;
        } else {
                solution1_converted = solution1;
        }
}

function get_available_solution2() {
        solution2 = document.getElementById("solution2").value;
        solution2_unit = document.getElementById("solution2_unit").value;
        if (solution2_unit==1) {
                solution2_converted = solution2*1000000;
        } else if (solution2_unit==2) {
                solution2_converted = solution2*1000;
        } else {
                solution2_converted = solution2;
        }
}

function get_available_solution3() {
        solution3 = document.getElementById("solution3").value;
        solution3_unit = document.getElementById("solution3_unit").value;
        if (solution3_unit==1) {
                solution3_converted = solution3*1000000;
        } else if (solution3_unit==2) {
                solution3_converted = solution3*1000;
        } else {
                solution3_converted = solution3;
        }
}

function get_available_solution4() {
        solution4 = document.getElementById("solution4").value;
        solution4_unit = document.getElementById("solution4_unit").value;
        if (solution4_unit==1) {
                solution4_converted = solution4*1000000;
        } else if (solution4_unit==2) {
                solution4_converted = solution4*1000;
        } else {
                solution4_converted = solution4;
        }
}

function get_available_solution5() {
        solution5 = document.getElementById("solution5").value;
        solution5_unit = document.getElementById("solution5_unit").value;
        if (solution5_unit==1) {
                solution5_converted = solution5*1000000;
        } else if (solution5_unit==2) {
                solution5_converted = solution5*1000;
        } else {
                solution5_converted = solution5;
        }
}

function get_desired_concentrations() {
        get_desired_concentration1();
        get_desired_concentration2();
        get_desired_concentration3();
        get_desired_concentration4();
        get_desired_concentration5();
}

function get_desired_concentration1() {
        concentration1 = document.getElementById("concentration1").value;
        concentration1_unit = document.getElementById("concentration1_unit").value;
        if (concentration1_unit==1) {
                concentration1_converted = concentration1*1000000;
        } else if (concentration1_unit==2) {
                concentration1_converted = concentration1*1000;
        } else {
                concentration1_converted = concentration1;
        }
}

function get_desired_concentration2() {
        concentration2 = document.getElementById("concentration2").value;
        concentration2_unit = document.getElementById("concentration2_unit").value;
        if (concentration2_unit==1) {
                concentration2_converted = concentration2*1000000;
        } else if (concentration2_unit==2) {
                concentration2_converted = concentration2*1000;
        } else {
                concentration2_converted = concentration2;
        }
}

function get_desired_concentration3() {
        concentration3 = document.getElementById("concentration3").value;
        concentration3_unit = document.getElementById("concentration3_unit").value;
        if (concentration3_unit==1) {
                concentration3_converted = concentration3*1000000;
        } else if (concentration3_unit==2) {
                concentration3_converted = concentration3*1000;
        } else {
                concentration3_converted = concentration3;
        }
}

function get_desired_concentration4() {
        concentration4 = document.getElementById("concentration4").value;
        concentration4_unit = document.getElementById("concentration4_unit").value;
        if (concentration4_unit==1) {
                concentration4_converted = concentration4*1000000;
        } else if (concentration4_unit==2) {
                concentration4_converted = concentration4*1000;
        } else {
                concentration4_converted = concentration4;
        }
}

function get_desired_concentration5() {
        concentration5 = document.getElementById("concentration5").value;
        concentration5_unit = document.getElementById("concentration5_unit").value;
        if (concentration5_unit==1) {
                concentration5_converted = concentration5*1000000;
        } else if (concentration5_unit==2) {
                concentration5_converted = concentration5*1000;
        } else {
                concentration5_converted = concentration5;
        }
}

function get_total_volume() {
        total_volume = document.getElementById("total_volume").value;
        total_volume_unit = document.getElementById("total_volume_unit").value;
        if (total_volume_unit==1) {
                total_volume_converted = total_volume*1000;
        } else {
                total_volume_converted = total_volume;
        }
}

function calculate_volumes() {
        volume1 = total_volume_converted/(solution1_converted/concentration1_converted);
        volume2 = total_volume_converted/(solution2_converted/concentration2_converted);
        volume3 = total_volume_converted/(solution3_converted/concentration3_converted);
        volume4 = total_volume_converted/(solution4_converted/concentration4_converted);
        volume5 = total_volume_converted/(solution5_converted/concentration5_converted);
        fill_up_volume = total_volume_converted-(volume1+volume2+volume3+volume4+volume5);
}

function set_volumes() {
        volume1_field = document.getElementById("required_volume1");
        volume1_field.value = volume1;
        volume2_field = document.getElementById("required_volume2");
        volume2_field.value = volume2;
        volume3_field = document.getElementById("required_volume3");
        volume3_field.value = volume3;
        volume4_field = document.getElementById("required_volume4");
        volume4_field.value = volume4;
        volume5_field = document.getElementById("required_volume5");
        volume5_field.value = volume5;
        console.log(fill_up_volume);
}
