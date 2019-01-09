<?php get_header(); ?>
<section class="container" id="actu">
        <div class=" col-two-third">
          <?php $obj = get_queried_object(); ?>
          <h2><?php _e( 'Articles de la catégorie ', 'locale' ); ?>: "<?= $obj->name ?>"</h2>
           <?php
               $i=0;
               if(have_posts()):
               while ( have_posts() ) :
               the_post();
               $maclasse="alignleft";
               if($i==1)
                   {$maclasse="alignright";}
           ?>
           <article class="item clearfloat">
               <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('thumbnail', array('class' => $maclasse));?></a>
               <a href="<?php the_permalink(); ?>"><h2 class="item-title"><?php the_title();?></h2></a>
               <div class="item-text"><?php the_excerpt(); ?></div>
           </article>          <?php          if($i==1)
               {$i=0;}
           else
               {$i=1;}
           endwhile;  else :
               ?>
           <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
          <?php endif; ?>
          <div class="navigation"><p><?php posts_nav_link(); ?></p></div>
      </div>
      <aside class="col-one-third">
        <?php get_sidebar(); ?>
      </aside>
  </section>

<?php get_footer(); ?>
