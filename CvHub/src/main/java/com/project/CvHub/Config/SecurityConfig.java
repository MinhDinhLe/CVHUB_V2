package com.project.CvHub.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }

//    @Bean
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
//        dataSource.setUrl("jdbc:mysql://localhost:3306/sakai");
//        dataSource.setUsername("root");
//        dataSource.setPassword("hA@0866100840!");
//        return dataSource;
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/resources/**", "/login", "/register", "/").permitAll()
//                        .requestMatchers("/uploadCV/**").authenticated()
//                        .anyRequest().permitAll()
//                )
//                .formLogin(form -> form
//                        .loginPage("/login")
//                        .defaultSuccessUrl("/")
//                        .failureUrl("/login?error")
//                        .usernameParameter("email")
//                        .passwordParameter("password")
//                )
//                .logout(logout -> logout
//                        .logoutSuccessUrl("/login?logout")
//                        .invalidateHttpSession(true)
//                        .deleteCookies("JSESSIONID")
//                )
//                .csrf(AbstractHttpConfigurer::disable)
//                .exceptionHandling(handling -> handling
//                        .accessDeniedPage("/403")
//                );
//
//        return http.build();
//    }
//
//    @Bean
//    public UserDetailsManager users(DataSource dataSource, PasswordEncoder passwordEncoder) {
//        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
//
//        // Set custom queries
//        users.setUsersByUsernameQuery(
//                "select email as username, password, 1 as enabled from cvhub_user where email=?");
//        users.setAuthoritiesByUsernameQuery(
//                "select email as username, role as authority from cvhub_user where email=?");
//
//        return users;
//    }
}