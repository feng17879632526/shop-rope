package com.javaweb.shopping.dao;

import com.javaweb.shopping.ShoppingApplication;
import com.javaweb.shopping.entity.Category;
import com.javaweb.shopping.entity.CategoryVO;
import com.javaweb.shopping.mapper.CategoryMapper;
import com.javaweb.shopping.utils.MD5Utils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ShoppingApplication.class)
public class CategoryTest {
    @Autowired
    private CategoryMapper categoryMapper;
    @Test
    public void test(){
        System.out.println(MD5Utils.md5("123456"));
        System.out.println(MD5Utils.md5("admin"));
      /*  CategoryVO categoryVO=new CategoryVO();
        categoryVO.setCategoryId(52);
        categoryVO.setCategoryName("hqf");
        categoryVO.setCategoryLevel(2);
        categoryVO.setParentId(1);

        categoryMapper.addCategory(categoryVO);*/


      /*
      *  category_id,
               category_name,
               category_level,
               parent_id,
               category_icon,
               category_slogan,
               category_pic,
               category_bg_color*/
//        List<CategoryVO> categories = categoryMapper.selectFirstLevelCategories();
//        System.out.println(categories.size());


    }
}
