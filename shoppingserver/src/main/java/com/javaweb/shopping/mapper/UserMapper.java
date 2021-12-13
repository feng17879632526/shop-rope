package com.javaweb.shopping.mapper;

import com.javaweb.shopping.entity.User;
import com.javaweb.shopping.general.GeneralDAO;
import org.springframework.stereotype.Repository;



@Repository
public interface UserMapper  extends GeneralDAO<User> {
}
