<?php get_header(); ?>
<?php while(have_posts()):the_post(); ?>
<section id='actu' class="container" >
        <div>
               <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('full');?></a>
               <h2><?php the_title();?></h2>
               <h3><?php the_field('book_autor') ?></h3>
         </div>

  </section>

<?php endwhile; ?>
<div class="navigation"><p><?php posts_nav_link(); ?></p></div>

<?php get_footer(); ?>
