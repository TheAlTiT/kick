package kicker.kick;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class trial {
    public static void main(String[] args) {
        Pattern p =Pattern.compile("slavik|dimas|vi");
        Matcher matcher=p.matcher("vi");
        System.out.println(matcher.matches());
    }
}
